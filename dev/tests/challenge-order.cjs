const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = process.env.CTFD_URL || 'http://localhost:8000';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage();
  let original;
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  async function settings() {
    await page.goto(`${root}/admin/config`);
    await page.waitForFunction(() => document.querySelector('#theme-settings + .CodeMirror')?.CodeMirror);
    await page.locator('a[href="#theme"]').click();
  }
  async function save() {
    await Promise.all([page.waitForNavigation(), page.locator('#theme > form button[type="submit"]').click()]);
  }
  async function rows() {
    await page.locator('.open-challenge').first().waitFor();
    return page.locator('.open-challenge').evaluateAll(elements => elements.map(el => ({ id: Number(el.dataset.id), name: el.textContent })));
  }
  try {
    await page.goto(`${root}/login`);
    await page.locator('#name').fill('admin');
    await page.locator('#password').fill('express-admin-local');
    await page.locator('#_submit').click();
    await settings();
    original = await page.locator('#theme-settings').inputValue();
    for (const order of ['name', 'id']) {
      await settings();
      await page.locator('#theme-settings-button').click();
      await page.locator('#express-challenge-order').selectOption(order);
      await page.locator('#theme-settings-modal button[type="submit"]').click();
      await page.locator('#theme-settings-modal').waitFor({ state: 'hidden' });
      await save();
      await page.goto(`${root}/challenges`);
      const initial = await rows();
      assert(initial.length > 1, 'Seed multiple challenges before running this check');
      const expected = [...initial].sort(order === 'id' ? (a, b) => a.id - b.id : (a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
      assert.deepEqual(initial, expected);
      const subject = page.locator('th[data-column="subject"]');
      assert.equal(await subject.getAttribute('aria-sort'), order === 'name' ? 'ascending' : 'none');
      await subject.locator('.column-label').click();
      assert.equal(await subject.getAttribute('aria-sort'), order === 'name' ? 'descending' : 'ascending');
      await page.locator('#search').fill('a');
      const filtered = await rows();
      const sorted = [...filtered].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }) * (order === 'name' ? -1 : 1));
      assert.deepEqual(filtered, sorted);
      await page.reload();
      assert.deepEqual(await rows(), expected);
    }
    assert.deepEqual(errors, []);
    console.log('PASS: saved theme order settings, ID/name ordering, header state, player overrides, filtering and reload defaults');
  } finally {
    if (original !== undefined) {
      await settings();
      await page.locator('#theme-settings + .CodeMirror').evaluate((el, value) => el.CodeMirror.setValue(value), original);
      await save();
    }
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
