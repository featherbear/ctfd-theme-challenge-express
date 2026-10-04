<script>
  import { onDestroy } from 'svelte';
  import { api } from './api.js';
  let { challengeId, challengeName, count } = $props();
  let dialog;
  let rows = $state([]);
  let loading = $state(false);
  let error = $state('');
  let generation = 0;
  onDestroy(() => generation++);
  async function load() {
    const current = ++generation;
    loading = true; error = ''; rows = [];
    try {
      const data = await api(`/challenges/${challengeId}/solves`);
      if (current === generation) rows = data;
    } catch (cause) { if (current === generation) error = cause.message; }
    finally { if (current === generation) loading = false; }
  }
  function open() { dialog.showModal(); load(); }
  function dismissOnBackdrop(node) {
    let startedOutside = false;
    function outside(event) {
      const rect = node.getBoundingClientRect();
      return event.target === node && (event.clientX < rect.left || event.clientX > rect.right
        || event.clientY < rect.top || event.clientY > rect.bottom);
    }
    function down(event) { startedOutside = outside(event); }
    function click(event) {
      if (startedOutside && outside(event)) node.close();
      startedOutside = false;
    }
    node.addEventListener('pointerdown', down);
    node.addEventListener('click', click);
    return { destroy() {
      node.removeEventListener('pointerdown', down);
      node.removeEventListener('click', click);
    } };
  }
</script>
{#if Number.isInteger(count) && count >= 0}
  <span class="challenge-solves">Total solves: {#if count > 0}<button type="button" class="solve-count" aria-label={`View ${count} solves`} onclick={open}>{count}</button>{:else}0{/if}</span>
{/if}
<dialog bind:this={dialog} use:dismissOnBackdrop class="express-dialog solves-dialog" aria-labelledby="solves-title" onclose={() => generation++}>
  <h2 id="solves-title">Solves - {challengeName}</h2>
  {#if loading}<p role="status">Loading solves...</p>
  {:else if error}<div class="alert alert-danger" role="alert">{error} <button type="button" onclick={load}>Retry</button></div>
  {:else if rows.length}
    <div class="table-responsive"><table class="table table-striped"><thead><tr><th>User</th><th>Solve time</th></tr></thead><tbody>
      {#each rows as solve}<tr><td><a href={solve.account_url}>{solve.name}</a></td><td><time datetime={solve.date}>{new Date(solve.date).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'long' })}</time></td></tr>{/each}
    </tbody></table></div>
  {:else}<p>No solves to display.</p>{/if}
  <div class="dialog-actions"><button type="button" class="btn btn-primary" onclick={() => dialog.close()}>Close</button></div>
</dialog>
