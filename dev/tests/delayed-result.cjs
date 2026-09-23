const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = process.env.CTFD_URL || 'http://localhost:8000';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    await page.goto(`${root}/login`);
    await page.locator('#name').fill('player');
    await page.locator('#password').fill('express-player-local');
    await page.locator('#_submit').click();
    const list = (await (await page.request.get(`${root}/api/v1/challenges`)).json()).data;
    const challenge = list.find(c => !c.solved_by_me);
    assert(challenge, 'Requires an unsolved seeded challenge');
    await page.route(`${root}/api/v1/challenges/${challenge.id}`, async route => {
      const response = await route.fetch();
      const json = await response.json();
      json.data.type = 'delayed';
      await route.fulfill({ response, json });
    });
    // Exact plugin receipt; no plugin installation or database writes required.
    const receipt = 'Your submission has been taken. Check back at 2026-12-01T00:00:00Z';
    let result = { status: 'incorrect', message: receipt };
    await page.route(`${root}/api/v1/challenges/attempt`, route => route.fulfill({ json: { success: true, data: result } }));
    await page.goto(`${root}/challenges`);
    await page.locator('#folders [data-view=unread]').click();
    const button = page.locator(`.open-challenge[data-id="${challenge.id}"]`);
    await button.click();
    await page.locator('#flag').fill('held-answer');
    await page.locator('.reply button[type=submit]').click();
    await page.locator('#submission-status.info .fa-info-circle').waitFor();
    assert.equal((await page.locator('#submission-status').innerText()).trim(), receipt);
    assert.equal(await page.locator('#submission-status.error').count(), 0);
    assert(await page.locator('#reader').isVisible());
    await page.screenshot({ path: 'dev/screenshots/delayed-result.png', fullPage: true });
    await page.locator('#back').click();
    assert(await button.isVisible(), 'Pending challenge remains in Unsolved Challenges');
    assert.equal(await button.locator('../..').getAttribute('class'), 'unread');
    await page.locator('#all-challenges').click();
    await button.click();
    result = { status: 'incorrect', message: 'Incorrect' };
    await page.locator('#flag').fill('wrong-after-expiry');
    await page.locator('.reply button[type=submit]').click();
    await page.locator('#submission-status.error .fa-times-circle').waitFor();
    result = { status: 'correct', message: 'Correct' };
    await page.locator('#flag').fill('correct-after-expiry');
    await page.locator('.reply button[type=submit]').click();
    await page.locator('#submission-status.success .fa-check-circle').waitFor();
    assert.deepEqual(errors, []);
    console.log('PASS: delayed receipt is informational, remains unsolved, and final incorrect/correct results retain error/success styling');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
