const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = process.env.CTFD_URL || 'http://localhost:8000';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    await page.goto(`${root}/login`);
    await page.locator('#name').fill('player');
    await page.locator('#password').fill('express-player-local');
    await page.locator('#_submit').click();
    const challenges = (await (await page.request.get(`${root}/api/v1/challenges`)).json()).data;
    const challenge = challenges[0];
    const progress = list => `${list.filter(c => c.solved_by_me).length} of ${list.length} challenges solved`;
    await page.goto(`${root}/challenges`);
    await page.locator('.open-challenge').first().waitFor();
    assert.equal(await page.locator('#folders [data-view=all]').innerText(), 'All Challenges');
    assert.equal(await page.locator('#progress').innerText(), progress(challenges));
    assert.equal(await page.getByText('Loading challenges...', { exact: true }).count(), 0);
    await page.locator('#folders [data-view=unread]').click();
    assert.equal(await page.locator('#progress').innerText(), progress(challenges));
    const category = page.locator('#folders [data-view=category]').filter({ hasText: challenge.category });
    await category.click();
    const categoryChallenges = challenges.filter(c => c.category === challenge.category);
    assert.equal(await page.locator('#progress').innerText(), progress(categoryChallenges));
    await page.locator('#search').fill('nothing-matches');
    assert.equal(await page.locator('#progress').innerText(), progress(categoryChallenges));
    await page.locator('#search').fill('');
    // Add tags to a real API response without modifying the local database.
    const detailUrl = `${root}/api/v1/challenges/${challenge.id}`;
    await page.route(detailUrl, async route => {
      const response = await route.fetch();
      const json = await response.json();
      json.data.tags = ['Beginner', '<script>literal tag</script>'];
      await route.fulfill({ response, json });
    });
    await page.locator(`.open-challenge[data-id="${challenge.id}"]`).click();
    await page.locator('.challenge-tag').first().waitFor();
    assert.deepEqual(await page.locator('.challenge-tag').allTextContents(), ['Beginner', '<script>literal tag</script>']);
    assert.equal(await page.locator('.challenge-tags script').count(), 0);
    await page.screenshot({ path: 'dev/screenshots/tags-desktop.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({ path: 'dev/screenshots/tags-mobile.png', fullPage: true });
    await page.unroute(detailUrl);
    await page.reload();
    await page.locator('#flag').waitFor();
    const actual = (await (await page.request.get(detailUrl)).json()).data;
    assert.equal(await page.locator('.challenge-tag').count(), actual.tags.length);
    const listUrl = `${root}/api/v1/challenges`;
    await page.route(listUrl, route => route.fulfill({ status: 503, json: { success: false, message: 'Temporarily unavailable' } }), { times: 1 });
    await page.goto(`${root}/challenges`);
    await page.getByText('Temporarily unavailable', { exact: true }).waitFor();
    await page.locator('#retry').click();
    await page.locator('.open-challenge').first().waitFor();
    assert.equal(await page.locator('#retry').isVisible(), false);
    // Hold a response until after Back to check that stale data cannot reopen it.
    let release;
    const gate = new Promise(resolve => { release = resolve; });
    await page.route(detailUrl, async route => {
      await gate;
      await route.fulfill({ json: { success: true, data: actual } });
    });
    const requested = page.waitForRequest(detailUrl);
    await page.locator(`.open-challenge[data-id="${challenge.id}"]`).click();
    await requested;
    await page.locator('#back').click();
    const delivered = page.waitForResponse(detailUrl);
    release();
    await delivered;
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    assert.equal(await page.locator('#reader').isVisible(), false);
    assert.equal(new URL(page.url()).hash, '');
    assert.deepEqual(errors, []);
    console.log('PASS: category progress, folder counts, tags/escaping, deep links, responsive layout, load retry and stale-response cancellation');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
