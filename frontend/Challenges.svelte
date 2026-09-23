<script>
  import { onMount, onDestroy, tick } from 'svelte';
  import { api } from './api.js';
  import ChallengeTable from './ChallengeTable.svelte';
  import Reader from './Reader.svelte';
  let { config } = $props();
  let challenges = $state([]), folder = $state('All Challenges'), view = $state('all'), search = $state('');
  let selected = $state(null), reading = $state(false), challenge = $state(null), readerError = $state('');
  let loading = $state(true), loadError = $state(''), notice = $state('');
  let generation = 0, loadGeneration = 0, dialog, backButton;
  let unread = $derived(challenges.filter(c => !c.solved_by_me));
  let categories = $derived([...new Set(challenges.map(c => c.category))]);
  let progressChallenges = $derived(view === 'category' ? challenges.filter(c => c.category === folder) : challenges);
  let folders = $derived([
    { name: 'All Challenges', type: 'all', count: unread.length },
    { name: 'Unsolved Challenges', type: 'unread', count: unread.length },
    ...categories.map(name => ({ name, type: 'category', count: unread.filter(c => c.category === name).length }))
  ]);
  let visible = $derived(challenges.filter(c => (view === 'all' || (view === 'unread' ? !c.solved_by_me : c.category === folder)) && `${c.name} ${c.category}`.toLowerCase().includes(search.toLowerCase().trim())));
  $effect(() => {
    const title = `${config.appName} - ${folder}`;
    document.title = title;
    document.getElementById('window-title').textContent = title;
  });
  async function load() {
    const ticket = ++loadGeneration;
    loading = true; loadError = '';
    try {
      const result = await api('/challenges');
      if (ticket === loadGeneration) challenges = result.sort((a, b) => a.id - b.id);
    } catch (error) { if (ticket === loadGeneration) loadError = error.message; }
    finally { if (ticket === loadGeneration) loading = false; }
  }
  async function back(focus = true) {
    generation++;
    reading = false; challenge = null; readerError = '';
    history.replaceState(null, '', location.pathname + location.search);
    await tick();
    if (focus) document.querySelector(`.open-challenge[data-id="${selected}"]`)?.focus();
  }
  function changeFolder(item) {
    folder = item.name; view = item.type; notice = ''; back(false);
  }
  async function open(id) {
    const ticket = ++generation;
    selected = id; reading = true; challenge = null; readerError = ''; notice = '';
    try {
      const result = await api(`/challenges/${id}`);
      if (ticket !== generation) return;
      challenge = result;
      history.replaceState(null, '', `#challenge-${id}`);
      await tick(); backButton?.focus();
    } catch (error) { if (ticket === generation) readerError = error.message; }
  }
  async function attempted(result) {
    const ticket = generation;
    await load();
    if (ticket === generation && view === 'unread' && ['correct', 'already_solved'].includes(result.status) && !loadError) {
      await back(false);
      notice = 'Challenge solved. Removed from Unsolved Challenges.';
      document.querySelector('#folders [data-view="unread"]')?.focus();
    }
  }
  onMount(() => {
    const match = location.hash.match(/-(\d+)$/);
    load().then(() => { if (match && generation === 0) open(Number(match[1])); });
  });
  onDestroy(() => { generation++; loadGeneration++; });
</script>

<div class="express-toolbar">
  <button id="all-challenges" type="button" onclick={() => { search = ''; changeFolder(folders[0]); }}><i class="fas fa-inbox" aria-hidden="true"></i> All Challenges</button>
  <button id="help-button" type="button" onclick={() => dialog.showModal()}><i class="fas fa-question-circle" aria-hidden="true"></i> Help</button>
  <label for="search">Search</label><div class="express-search"><i class="fas fa-search" aria-hidden="true"></i><input id="search" type="search" placeholder="Find a challenge" bind:value={search} oninput={() => { notice = ''; back(false); }}></div>
</div>
<div class="express-address">Address <span id="address">Folders / {folder}</span></div>
<div class="express-workspace">
  <aside class="express-sidebar" aria-label="Challenge categories">
    <h2>Folders</h2>
    <div id="folders">
      {#each folders as item, index (`${item.type}:${item.name}`)}
        {#if index === 2}<hr class="folder-divider">{/if}
        <button type="button" class:active={view === item.type && folder === item.name} data-view={item.type} data-folder={item.name} onclick={() => changeFolder(item)}><i class={`fas fa-${item.type === 'unread' ? 'envelope' : 'folder'}`} aria-hidden="true"></i>{item.name}{item.type === 'all' ? '' : ` (${item.count})`}</button>
      {/each}
    </div>
    <p id="progress" aria-live="polite">{progressChallenges.filter(c => c.solved_by_me).length} of {progressChallenges.length} challenges solved</p>
  </aside>
  <section class="express-main" aria-label="Challenges">
    <h1 id="folder-heading">{folder}</h1>
    <p id="board-status" role="status">{loadError || (loading ? 'Loading challenges...' : notice || (visible.length ? '' : 'No challenges found.'))}</p>
    <button id="retry" hidden={!loadError} type="button" onclick={load}>Try again</button>
    <ChallengeTable challenges={visible} defaultOrder={config.themeSettings?.challenge_order} onopen={open} hidden={reading} />
    <section id="reader" hidden={!reading} aria-label="Challenge message">
      <button id="back" type="button" bind:this={backButton} onclick={() => back()}>Back to challenges</button>
      <div id="message">
        {#if reading}
          {#if readerError}{readerError}
          {:else if challenge}
            {#key challenge.id}<Reader {challenge} onattempt={attempted} />{/key}
          {:else}Loading message...{/if}
        {/if}
      </div>
    </section>
  </section>
</div>
<dialog id="help-dialog" bind:this={dialog}>
  <h2>{config.appName}</h2>
  <p>Open a challenge to read its message. Reply with the flag to solve it.</p>
  <p>Unsolved challenges appear as unread mail. Solved challenges appear as read mail.</p>
  <p>Drag column headers to reorder them, or their edges to resize. With a header focused, use Alt + Left/Right to reorder.</p>
  <form method="dialog"><button>Close</button></form>
</dialog>
