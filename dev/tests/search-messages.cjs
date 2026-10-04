const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.CTFD_URL || 'http://127.0.0.1:8000';
(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(`${base}/login`);
    await page.locator('#name').fill('player');
    await page.locator('#password').fill('express-player-local');
    await page.locator('#_submit').click();
    await page.waitForURL('**/challenges');
    let completed = false;
    await page.route('**/api/v1/challenges', route => route.fulfill({ json: { success: true, data: [
      { id: 1, name: 'First', category: 'Web', value: 50, solves: 1, solved_by_me: true },
      { id: 2, name: 'Second', category: 'Web', value: 100, solves: 0, solved_by_me: completed }
    ] } }));
    await page.reload();
    const status = page.locator('#board-status');
    const expectStatus = async text => {
      await page.waitForFunction(expected => document.querySelector('#board-status')?.textContent === expected, text);
      assert.equal(await status.textContent(), text);
    };
    await page.waitForFunction(() => document.querySelector('#progress')?.textContent === '1 of 2 challenges solved');
    await expectStatus('');
    const query = '<img src=x onerror="window.searchXss=true">';
    await page.locator('#search').fill(query);
    await expectStatus(`No challenges matching '${query}' found`);
    assert.equal(await page.locator('.message-list').isVisible(), false);
    assert.equal(await status.locator('*').count(), 0);
    assert.equal(await page.evaluate(() => window.searchXss), undefined);
    await page.locator('#folders [data-view="unread"]').click();
    await expectStatus(`No unsolved challenges matching '${query}' found`);
    await page.locator('#search').fill('');
    await expectStatus('');
    assert.equal(await page.locator('#challenge-rows tr').count(), 1);
    assert.equal(await page.locator('.message-list').isVisible(), true);
    completed = true;
    await page.reload();
    await page.waitForFunction(() => document.querySelector('#progress')?.textContent === '2 of 2 challenges solved');
    await expectStatus('');
    await page.locator('#folders [data-view="unread"]').click();
    await expectStatus('No unsolved challenges, you legend!');
    assert.equal(await page.locator('.message-list').isVisible(), false);
    await page.locator('#search').fill(query);
    await expectStatus('No unsolved challenges, you legend!');
    await page.locator('#all-challenges').click();
    await expectStatus('');
    assert.equal(await page.locator('.express-sidebar #progress').textContent(), '2 of 2 challenges solved');
    console.log('PASS: search messages, literal HTML query, unsolved completion precedence, and overall progress');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
