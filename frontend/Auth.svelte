<script>
  import { onMount } from 'svelte';
  import { draggable } from './draggable.js';
  import Alerts from './Alerts.svelte';
  import Field from './Field.svelte';
  let { page, site, config } = $props();
  let busy = $state(false);
  const root = $derived(config.urlRoot);
  const titles = { login: 'Log On', register: 'Register', reset: 'Reset Password', confirm: 'Confirm' };
  onMount(() => {
    if (page.kind === 'login') document.getElementById('name')?.focus();
    const restore = () => busy = false;
    window.addEventListener('pageshow', restore);
    return () => window.removeEventListener('pageshow', restore);
  });
</script>
{#snippet form()}
  <Alerts errors={site.errors} infos={site.infos} />
  <form method="post" accept-charset="utf-8" class:logon-form={page.kind === 'login'} onsubmit={() => busy = true}>
    {#each page.fields || [] as field}<Field {field} compact={page.kind === 'login'} />{/each}
    <input type="hidden" name="nonce" value={config.csrfNonce} />
    <div class:logon-actions={page.kind === 'login'} class:auth-actions={page.kind !== 'login'}>
      {#if page.kind === 'login'}<a href={`${root}/reset_password`}>Forgot your password?</a>{/if}
      <button id="_submit" name="_submit" type="submit" class="btn btn-primary xp-default" disabled={busy}>{busy ? 'Please wait...' : page.kind === 'login' ? 'Log On' : page.kind === 'confirm' ? 'Send Confirmation Email' : 'Submit'}</button>
    </div>
  </form>
{/snippet}
{#if page.kind === 'login'}
  <div class="login-stage">
    <section class="xp-logon" aria-labelledby="logon-title" use:draggable>
      <header class="express-title logon-drag-handle" tabindex="0" role="button" aria-label="Move login window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys"><i class="fas fa-key" aria-hidden="true"></i> Log On</header>
      <div class="logon-banner">
        {#if site.logo}<img class="logon-icon" src={site.logo} alt="" />{:else}
          <svg class="logon-icon" viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="9" width="50" height="36" rx="2" fill="#eef4ff" stroke="#153e80" stroke-width="3"/><path d="M12 14h40v25H12z" fill="#245bb4"/><path d="M26 46v7h12v-7M18 55h28" fill="none" stroke="#153e80" stroke-width="3"/><rect x="24" y="23" width="16" height="12" rx="1" fill="#ffe4a0"/><path d="M28 23v-3a4 4 0 0 1 8 0v3" fill="none" stroke="#ffe4a0" stroke-width="3"/></svg>
        {/if}
        <div><h1 id="logon-title">{site.appName}</h1><p>Log on to {site.eventName}</p></div>
      </div>
      <div class="logon-content"><p>Enter your user name and password to continue.</p>{@render form()}
        {#if site.oauth}<a class="btn logon-oauth" href={site.oauth}>Log on with Major League Cyber</a>{/if}
      </div>
      {#if site.registration}<footer class="logon-footer">Need an account? <a href={`${root}/register`}>Register</a></footer>{/if}
    </section>
  </div>
{:else}
  <div class="jumbotron"><div class="container"><h1>{titles[page.kind]}</h1></div></div>
  <div class="container"><div class="auth-page">
    {#if page.kind === 'reset'}<p>{page.mode === 'set' ? 'You can now reset the password for your account and log in. Please enter a new password below.' : 'Please provide the email address associated with your account below.'}</p>{/if}
    {#if page.kind === 'confirm'}
      <p>{page.initial ? 'To send a confirmation email to your email address, please click the button below.' : "We've sent a confirmation email to your email address."}</p>
      <p>Please click the link in that email to confirm your account.</p><p>If the email does not arrive, check your spam folder or contact an administrator to manually verify your account.</p>
    {/if}
    {#if page.kind === 'register' && site.oauth}<a class="btn btn-secondary mb-3" href={site.oauth}>Log on with Major League Cyber</a>{/if}
    {@render form()}
    {#if page.kind === 'confirm'}<a class="btn btn-secondary mt-3" href={`${root}/settings`}>Change Email Address</a>{/if}
    {#if page.kind === 'register' && page.showTerms}<p class="text-muted mt-3">By registering, you agree to the <a href={page.privacy} target="_blank" rel="noopener">privacy policy</a> and <a href={page.terms} target="_blank" rel="noopener">terms of service</a>.</p>{/if}
  </div></div>
{/if}
