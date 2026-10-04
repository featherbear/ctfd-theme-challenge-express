<script>
  import { untrack } from 'svelte';
  import Field from './Field.svelte';
  import { api } from './api.js';
  let { page } = $props();
  let tab = $state('profile');
  let busy = $state(false);
  let error = $state('');
  let success = $state('');
  let tokens = $state(untrack(() => page.tokens));
  let token = $state('');
  let tokenModal;
  let initial;
  function formValues(form) {
    const data = Object.fromEntries(new FormData(form));
    for (const input of form.querySelectorAll('input[type="checkbox"]')) data[input.name] = input.checked;
    return data;
  }
  function capture(form) { initial = formValues(form); }
  async function save(event) {
    event.preventDefault();
    if (busy) return;
    busy = true; error = ''; success = '';
    const form = event.currentTarget;
    const values = formValues(form);
    const data = {};
    for (const [key, value] of Object.entries(values)) {
      if (key === '_submit' || value === initial[key]) continue;
      const custom = /^fields\[(\d+)\]$/.exec(key);
      if (custom) (data.fields ||= []).push({ field_id: Number(custom[1]), value });
      else data[key] = value;
    }
    try {
      await api('/users/me', data, { method: 'PATCH' });
      success = 'Your profile has been updated.';
      for (const input of form.querySelectorAll('input[type="password"]')) input.value = '';
      initial = formValues(form);
    } catch (cause) { error = cause.message; }
    finally { busy = false; }
  }
  async function generate(event) {
    event.preventDefault();
    if (busy) return;
    busy = true; error = ''; success = '';
    const data = formValues(event.currentTarget);
    if (!data.expiration) delete data.expiration;
    try {
      const created = await api('/tokens', data);
      token = created.value;
      const { value, ...metadata } = created;
      tokens = [...tokens, metadata];
      tokenModal.showModal();
    } catch (cause) { error = cause.message; }
    finally { busy = false; }
  }
  async function remove(id) {
    if (busy || !confirm('Are you sure you want to delete this token?')) return;
    busy = true; error = ''; success = '';
    try { await api(`/tokens/${id}`, undefined, { method: 'DELETE' }); tokens = tokens.filter(item => item.id !== id); }
    catch (cause) { error = cause.message; }
    finally { busy = false; }
  }
  async function copy() {
    try { await navigator.clipboard.writeText(token); success = 'API key copied.'; }
    catch { success = 'Select and copy the API key below.'; }
  }
  function switchTab(value) { tab = value; error = ''; success = ''; }
</script>
<div class="jumbotron"><div class="container"><h1>Settings</h1></div></div>
<div class="container settings-layout">
  <div class="nav flex-column nav-pills" aria-label="Settings sections">
    <button class="nav-link" class:active={tab === 'profile'} id="settings-profile-tab" aria-pressed={tab === 'profile'} onclick={() => switchTab('profile')}>Profile</button>
    <button class="nav-link" class:active={tab === 'tokens'} id="settings-tokens-tab" aria-pressed={tab === 'tokens'} onclick={() => switchTab('tokens')}>Access Tokens</button>
  </div>
  <div>
    {#if error}<div class="alert alert-danger" role="alert">{error}</div>{/if}
    {#if success}<div class="alert alert-success" role="status">{success}</div>{/if}
    <section id="profile" hidden={tab !== 'profile'}>
      <form method="post" use:capture onsubmit={save}>
        {#each page.fields as field}<Field {field} />{/each}
        <button type="submit" id="_submit" class="btn btn-primary" disabled={busy}>{busy ? 'Saving...' : 'Submit'}</button>
      </form>
    </section>
    <section id="tokens" hidden={tab !== 'tokens'}>
      <form onsubmit={generate}>
        <div class="mb-3"><label for="expiration" class="form-label">Expiration</label><input id="expiration" name="expiration" type="date" class="form-control" /></div>
        <div class="mb-3"><label for="description" class="form-label">Usage Description</label><textarea id="description" name="description" class="form-control" rows="3"></textarea></div>
        <button type="submit" class="btn btn-primary" disabled={busy}>Generate</button>
      </form>
      <h2 class="h4 mt-4">Active Tokens</h2>
      {#if tokens.length}<div class="table-responsive"><table class="table"><thead><tr><th>Created</th><th>Expiration</th><th>Description</th><th>Delete</th></tr></thead><tbody>
        {#each tokens as item}<tr><td>{item.created ? new Date(item.created).toLocaleDateString() : ''}</td><td>{item.expiration ? new Date(item.expiration).toLocaleDateString() : 'Never'}</td><td>{item.description}</td><td><button class="btn" aria-label={`Delete token ${item.description || item.id}`} disabled={busy} onclick={() => remove(item.id)}><i class="fas fa-times" aria-hidden="true"></i></button></td></tr>{/each}
      </tbody></table></div>{:else}<p>No active tokens.</p>{/if}
    </section>
  </div>
</div>
<dialog bind:this={tokenModal} class="express-dialog" onclose={() => token = ''}>
  <h2>API Key Generated</h2><p>Please copy your API key. It will not be shown again!</p>
  <input class="form-control" aria-label="API key" readonly value={token} onclick={event => event.currentTarget.select()} />
  <div class="dialog-actions"><button class="btn" onclick={copy}>Copy</button><button class="btn btn-primary" onclick={() => tokenModal.close()}>Got it!</button></div>
</dialog>
