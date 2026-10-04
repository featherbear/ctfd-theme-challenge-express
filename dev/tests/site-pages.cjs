// Native CTFd form/API boundaries for the remaining Svelte player pages.
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.CTFD_URL || 'http://localhost:8000';

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const admin = await browser.newPage();
  const errors = [];
  const notifications = [];
  page.on('pageerror', error => errors.push(error.stack));
  async function login(target, name, password) {
    await target.goto(`${base}/login`);
    await target.locator('#name').fill(name);
    await target.locator('#password').fill(password);
    await target.locator('#_submit').click();
    await target.waitForURL('**/challenges');
    await target.locator('.open-challenge').first().waitFor();
  }
  async function api(target, path, data, method = 'POST') {
    return target.evaluate(async ({ path, data, method }) => {
      const response = await fetch(`${window.init.urlRoot}/api/v1${path}`, {
        method, headers: { 'Content-Type': 'application/json', 'CSRF-Token': window.init.csrfNonce },
        ...(data ? { body: JSON.stringify(data) } : {})
      });
      const result = await response.json();
      if (!response.ok || result.success === false) throw new Error(JSON.stringify(result));
      return result.data;
    }, { path, data, method });
  }
  try {
    for (let attempt = 0; attempt < 30; attempt++) {
      try { if ((await page.request.get(`${base}/login`)).ok()) break; } catch {}
      if (attempt === 29) throw new Error('CTFd did not become ready');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    const name = `site-${Date.now()}`;
    await page.goto(`${base}/register`);
    await page.locator('#name').fill(name);
    await page.locator('#email').fill(`${name}@example.test`);
    await page.locator('#password').fill('express-browser-test');
    await page.locator('#_submit').click();
    await page.waitForURL('**/challenges');
    await page.locator('.open-challenge').first().waitFor();
    const id = await page.evaluate(() => window.init.userId);
    await page.goto(`${base}/settings`);
    await page.locator('#affiliation').fill('Svelte migration check');
    await page.locator('#website').fill('https://example.test');
    await page.locator('#country').selectOption('AU');
    await page.locator('#profile #_submit').click();
    await page.getByText('Your profile has been updated.', { exact: true }).waitFor();
    await page.reload();
    assert.equal(await page.locator('#affiliation').inputValue(), 'Svelte migration check');
    assert.equal(await page.locator('#country').inputValue(), 'AU');
    assert.equal(await page.locator('[name=language]').count(), 0);
    await page.locator('#confirm').fill('incorrect-password');
    await page.locator('#password').fill('express-updated-password');
    await page.locator('#profile #_submit').click();
    await page.locator('.alert-danger').waitFor();
    assert.match(await page.locator('.alert-danger').innerText(), /password/i);
    await page.locator('#confirm').fill('express-browser-test');
    await page.locator('#profile #_submit').click();
    await page.getByText('Your profile has been updated.', { exact: true }).waitFor();
    assert.equal(await page.locator('#password').inputValue(), '');
    await page.locator('#settings-tokens-tab').click();
    await page.locator('#description').fill('Svelte test token');
    await page.getByRole('button', { name: 'Generate', exact: true }).click();
    await page.getByRole('heading', { name: 'API Key Generated' }).waitFor();
    assert((await page.getByLabel('API key', { exact: true }).inputValue()).length > 30);
    await page.getByRole('button', { name: 'Got it!' }).click();
    await page.reload();
    await page.locator('#settings-tokens-tab').click();
    await page.getByRole('cell', { name: 'Svelte test token', exact: true }).waitFor();
    page.once('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: 'Delete token Svelte test token' }).click();
    await page.getByText('No active tokens.', { exact: true }).waitFor();
    assert.deepEqual(await api(page, '/tokens', undefined, 'GET'), []);
    await page.goto(`${base}/logout`);
    await login(page, name, 'express-updated-password');
    await page.getByRole('button', { name: 'Welcome to your inbox', exact: true }).click();
    await page.locator('#flag').fill('flag{youve_got_mail}');
    await page.getByRole('button', { name: 'Send', exact: true }).click();
    await page.locator('#submission-status.success').waitFor();
    for (const path of ['/user', `/users/${id}`]) {
      await page.goto(base + path);
      await page.locator('canvas').waitFor();
      await page.getByRole('cell', { name: 'Welcome to your inbox', exact: true }).waitFor();
      assert(await page.locator('.profile-graphs').evaluate(el => Boolean(el.compareDocumentPosition(document.querySelector('table')) & Node.DOCUMENT_POSITION_FOLLOWING)));
      await page.getByRole('heading', { name: '50 points', exact: true }).waitFor();
    }
    await page.goto(`${base}/users`);
    await page.locator('[name=q]').fill(name);
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name, exact: true }).waitFor();
    assert.equal(await page.locator('tbody tr').count(), 1);
    await page.locator('[name=q]').fill('no-user-matches-this-query');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByText('No users match your search.').waitFor();
    let fail = true;
    await page.route('**/api/v1/scoreboard', route => fail ? route.fulfill({ status: 503, json: { success: false, message: 'Temporarily unavailable' } }) : route.continue());
    await page.goto(`${base}/scoreboard`);
    await page.getByText('Temporarily unavailable', { exact: false }).waitFor();
    fail = false;
    await page.getByRole('button', { name: 'Retry', exact: true }).click();
    await page.locator('canvas').waitFor();
    await page.unroute('**/api/v1/scoreboard');
    await page.getByRole('link', { name, exact: true }).waitFor();
    await login(admin, 'admin', 'express-admin-local');
    await page.goto(`${base}/challenges`);
    await page.locator('.open-challenge').first().waitFor();
    const notification = await api(admin, '/notifications', { title: `Svelte alert ${id}`, content: '**Live delivery** is working.', user_id: id, type: 'alert', sound: false });
    notifications.push(notification.id);
    await page.getByRole('dialog').filter({ hasText: `Svelte alert ${id}` }).waitFor();
    await page.getByRole('button', { name: 'Close', exact: true }).click();
    const toast = await api(admin, '/notifications', { title: `Svelte toast ${id}`, content: 'A non-modal notification.', user_id: id, type: 'toast', sound: false });
    notifications.push(toast.id);
    await page.locator('.express-toast').waitFor();
    await page.getByRole('button', { name: 'Dismiss', exact: true }).click();
    const background = await api(admin, '/notifications', { title: `Svelte background ${id}`, content: 'Read from the notification list.', user_id: id, type: 'background', sound: false });
    notifications.push(background.id);
    await page.locator('a[href$="/notifications"] .badge').waitFor();
    await page.goto(`${base}/notifications`);
    await page.getByRole('heading', { name: background.title, exact: true }).waitFor();
    await page.waitForFunction(() => !document.querySelector('a[href$="/notifications"] .badge'));
    await page.reload();
    await page.getByRole('heading', { name: toast.title, exact: true }).waitFor();
    assert.equal(await page.locator('a[href$="/notifications"] .badge').count(), 0);
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
      await page.setViewportSize(viewport);
      for (const path of ['/settings', `/users/${id}`, '/scoreboard', '/users', '/notifications', '/']) {
        await page.goto(base + path);
        await page.locator('.express-title').first().waitFor();
        if (path === '/scoreboard' || path.startsWith('/users/')) await page.locator('canvas').waitFor();
        assert.equal(await page.locator('[x-data]').count(), 0, `${path} still uses Alpine`);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${path} overflow`);
        await page.screenshot({ path: `dev/screenshots/site-${path.replaceAll('/', '-') || 'home'}-${viewport.width}.png` });
      }
    }
    await page.getByRole('button', { name: 'Toggle navigation' }).click();
    assert(await page.getByRole('link', { name: 'Settings', exact: true }).isVisible());
    const missing = await page.goto(`${base}/page-that-does-not-exist`);
    assert.equal(missing.status(), 404);
    await page.getByRole('heading', { name: 'File not found', exact: true }).waitFor();
    await page.goto(`${base}/reset_password`);
    await page.getByRole('heading', { name: 'Reset Password', exact: true }).waitFor();
    await page.locator('.alert-danger').waitFor();
    assert.equal(await page.locator('.alert-danger br').count(), 1, 'Trusted server messages retain their markup');
    assert.deepEqual(errors, []);
    console.log(`PASS: profile persistence, password change/validation, tokens, public/private profiles, user search, scoreboard retry, live alert/toast/background notifications, error/reset pages, Svelte-only shell, desktop/mobile. User: ${name}`);
  } finally {
    for (const id of notifications) await api(admin, `/notifications/${id}`, undefined, 'DELETE');
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
