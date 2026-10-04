<script>
  import { onMount, untrack } from 'svelte';
  import { api } from './api.js';
  let { page, config, onunread } = $props();
  const relevant = item => (!item.user_id || item.user_id === config.userId) && (!item.team_id || item.team_id === config.teamId);
  let notifications = $state(untrack(() => (page.notifications || []).filter(relevant)));
  let read = $state([]);
  let popup = $state(null);
  let error = $state('');
  let modal;
  const key = $derived(`challenge-express-notifications:${config.urlRoot}:${config.userId || 'guest'}`);
  function save() {
    try { localStorage.setItem(key, JSON.stringify(read)); } catch { /* Reading notifications still works when storage is unavailable. */ }
  }
  function markRead(ids) { read = [...new Set([...read, ...ids])]; save(); }
  function close() { if (popup) markRead([popup.id]); popup = null; }
  async function load() {
    try { notifications = (await api('/notifications')).filter(relevant); error = ''; if (page.kind === 'notifications') markRead(notifications.map(item => item.id)); }
    catch (cause) { if (page.kind === 'notifications') error = cause.message; }
  }
  $effect(() => { onunread(notifications.filter(item => !read.includes(item.id)).length); });
  $effect(() => { if (popup && popup.type !== 'toast' && modal && !modal.open) modal.showModal(); });
  $effect(() => {
    if (popup?.type !== 'toast') return;
    const timeout = setTimeout(() => popup = null, 8000);
    return () => clearTimeout(timeout);
  });
  onMount(() => {
    try { const stored = JSON.parse(localStorage.getItem(key) || '[]'); if (Array.isArray(stored)) read = stored; } catch { read = []; }
    load();
    const storage = event => { if (event.key === key) { try { const values = JSON.parse(event.newValue || '[]'); if (Array.isArray(values)) read = values; } catch { /* Ignore malformed external storage. */ } } };
    window.addEventListener('storage', storage);
    const stream = config.userId ? new EventSource(`${config.urlRoot}/events`) : null;
    let connected = false;
    stream?.addEventListener('open', () => { if (connected) load(); connected = true; });
    stream?.addEventListener('notification', event => {
      let item;
      try { item = JSON.parse(event.data); } catch { return; }
      if (!relevant(item)) return;
      const fresh = !notifications.some(entry => entry.id === item.id);
      notifications = [...notifications.filter(entry => entry.id !== item.id), item];
      if (page.kind === 'notifications') markRead([item.id]);
      else if (fresh && !read.includes(item.id) && item.type !== 'background') popup = item;
    });
    return () => { stream?.close(); window.removeEventListener('storage', storage); };
  });
</script>
{#if page.kind === 'notifications'}
  <div class="jumbotron"><div class="container"><h1>Notifications</h1></div></div>
  <div class="container">
    {#if error}<div class="alert alert-danger" role="alert">{error} <button class="btn" onclick={load}>Retry</button></div>{/if}
    {#if !notifications.length && !error}<h2 class="text-center">There are no notifications yet</h2>{/if}
    {#each [...notifications].sort((a, b) => b.id - a.id) as item}<article class="card bg-body-tertiary mb-4"><div class="card-body"><h3>{item.title}</h3><div>{@html item.html}</div><time class="text-muted" datetime={item.date}>{new Date(item.date).toLocaleString()}</time></div></article>{/each}
  </div>
{/if}
{#if popup?.type === 'toast'}<aside class="express-toast" role="status"><h2>{popup.title}</h2><div>{@html popup.html || ''}</div><button class="btn" onclick={close}>Dismiss</button></aside>{/if}
<dialog bind:this={modal} class="express-dialog" aria-labelledby="notification-title" onclose={close}>
  {#if popup && popup.type !== 'toast'}<h2 id="notification-title">{popup.title}</h2><div>{@html popup.html || ''}</div><div class="dialog-actions"><a class="btn" href={`${config.urlRoot}/notifications`}>All notifications</a><button class="btn btn-primary" onclick={() => modal.close()}>Close</button></div>{/if}
</dialog>
