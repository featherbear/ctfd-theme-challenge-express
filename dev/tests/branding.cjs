const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = process.env.CTFD_URL || 'http://localhost:8000';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const admin = await browser.newPage();
  let original;
  async function settings() {
    await admin.goto(`${root}/admin/config`);
    await admin.waitForFunction(() => document.querySelector('#theme-settings + .CodeMirror')?.CodeMirror);
    await admin.locator('a[href="#theme"]').click();
    await admin.locator('#theme-settings-button').waitFor({ state: 'visible' });
  }
  async function save() {
    await Promise.all([
      admin.waitForNavigation(),
      admin.locator('#theme > form button[type="submit"]').click()
    ]);
  }
  async function inside() {
    const rect = await page.locator('.xp-logon').boundingBox();
    const view = page.viewportSize();
    assert(rect.x >= -1 && rect.y >= -1 && rect.x + rect.width <= view.width + 1 && rect.y + rect.height <= view.height + 1, JSON.stringify({ rect, view }));
    return rect;
  }
  try {
    await page.goto(`${root}/login`);
    await page.locator('.is-draggable').waitFor();
    const before = await inside();
    const titlebar = await page.locator('.logon-drag-handle').boundingBox();
    await page.mouse.move(titlebar.x + 40, titlebar.y + 12);
    await page.mouse.down();
    await page.mouse.move(titlebar.x + 200, titlebar.y + 110, { steps: 10 });
    await page.mouse.up();
    const after = await inside();
    assert(Math.abs(after.x - before.x - 160) < 1, 'Dragging must change the horizontal position');
    assert(Math.abs(after.y - before.y - 98) < 1, 'Dragging must change the vertical position');
    for (const [x, y] of [[0, 0], [1440, 1000], [0, 1000], [1440, 0]]) {
      const handle = await page.locator('.logon-drag-handle').boundingBox();
      await page.mouse.move(handle.x + 40, handle.y + 12);
      await page.mouse.down();
      await page.mouse.move(x, y, { steps: 6 });
      await page.mouse.up();
      await inside();
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(100);
    await inside();
    await page.locator('.logon-drag-handle').focus();
    await page.keyboard.press('ArrowLeft');
    await inside();
    await page.screenshot({ path: 'dev/screenshots/login-draggable-mobile.png' });
    await page.setViewportSize({ width: 568, height: 260 });
    await page.waitForTimeout(100);
    await inside();
    assert(await page.locator('.xp-logon').evaluate(el => el.scrollHeight > el.clientHeight));

    await admin.goto(`${root}/login`);
    await admin.locator('#name').fill('admin');
    await admin.locator('#password').fill('express-admin-local');
    await admin.locator('#_submit').click();
    await settings();
    original = await admin.locator('#theme-settings').inputValue();
    await admin.locator('#theme-settings-button').click();
    await admin.locator('#express-app-name').fill('Campus Mail & CTF');
    const logo = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="#194c9f"/></svg>');
    await admin.locator('#express-logo').fill(logo);
    await admin.locator('#theme-settings-modal button[type="submit"]').click();
    await admin.locator('#theme-settings-modal').waitFor({ state: 'hidden' });
    await save();
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(`${root}/login`);
    assert.equal(await page.locator('#logon-title').innerText(), 'Campus Mail & CTF');
    assert((await page.title()).startsWith('Campus Mail & CTF -'));
    assert(await page.locator('img.logon-icon').evaluate(img => img.complete && img.naturalWidth > 0));
    await inside();
    await page.screenshot({ path: 'dev/screenshots/login-custom-brand.png' });
    await admin.goto(`${root}/challenges`);
    await admin.waitForFunction(() => document.title === 'Campus Mail & CTF - All Challenges');
    assert.equal(await admin.locator('#help-dialog h2').textContent(), 'Campus Mail & CTF');
    assert.equal(await admin.locator('.express-brand-icon').getAttribute('src'), logo);
    await settings();
    await admin.locator('#theme-settings + .CodeMirror').evaluate(el => el.CodeMirror.setValue('{}'));
    await save();
    await page.reload();
    assert.equal(await page.locator('#logon-title').innerText(), 'Challenge Express');
    assert.equal(await page.locator('svg.logon-icon').count(), 1);
    assert.deepEqual(errors, []);
    console.log('PASS: drag boundaries, keyboard movement, resize, short viewport scrolling, Theme Settings builder, custom branding and defaults');
  } finally {
    if (original !== undefined) {
      await settings();
      await admin.locator('#theme-settings + .CodeMirror').evaluate((el, value) => el.CodeMirror.setValue(value), original);
      await save();
    }
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
