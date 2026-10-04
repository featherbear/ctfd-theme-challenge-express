<script>
  import { onMount } from 'svelte';
  import Chart from './Chart.svelte';
  import { api } from './api.js';
  let standings = $state([]);
  let brackets = $state([]);
  let bracket = $state('');
  let details = $state({});
  let loading = $state(true);
  let error = $state('');
  let generation = 0;
  const visible = $derived(standings.filter(row => !bracket || String(row.bracket_id) === bracket));
  const series = $derived(Object.values(details).map(account => {
    let score = 0;
    return { name: account.name, data: [...account.solves].sort((a, b) => new Date(a.date) - new Date(b.date)).map(solve => [new Date(solve.date).getTime(), score += solve.value]) };
  }));
  async function load() {
    const current = ++generation;
    error = '';
    try {
      const [rows, groups, top] = await Promise.all([api('/scoreboard'), api('/brackets?type=users'), api(`/scoreboard/top/10${bracket ? `?bracket_id=${encodeURIComponent(bracket)}` : ''}`)]);
      if (current !== generation) return;
      standings = rows; brackets = groups; details = top;
    } catch (cause) { if (current === generation) error = cause.message; }
    finally { if (current === generation) loading = false; }
  }
  function change(value) { bracket = value; load(); }
  onMount(() => { load(); const interval = setInterval(load, 300000); return () => { clearInterval(interval); generation++; }; });
</script>
<div class="jumbotron"><div class="container"><h1>Scoreboard</h1></div></div>
<div class="container">
  {#if loading}<p role="status">Loading scoreboard...</p>{/if}
  {#if error}<div class="alert alert-danger" role="alert">{error} <button class="btn" onclick={load}>Retry</button></div>{/if}
  {#if brackets.length}<nav class="nav nav-pills mb-3" aria-label="Competition bracket"><button class="nav-link" class:active={!bracket} onclick={() => change('')}>All</button>{#each brackets as group}<button class="nav-link" class:active={bracket === String(group.id)} onclick={() => change(String(group.id))}>{group.name}</button>{/each}</nav>{/if}
  {#if series.length}<Chart title="Top 10 Users" {series} />{/if}
  <div id="scoreboard" class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Place</th><th>User</th><th>Score</th></tr></thead><tbody>
    {#each visible as standing, index}<tr><th scope="row">{index + 1}</th><td><a href={standing.account_url}>{standing.name}</a>{#if standing.bracket_name}<span class="badge bg-secondary ms-2">{standing.bracket_name}</span>{/if}</td><td>{standing.score}</td></tr>{/each}
  </tbody></table></div>
  {#if !loading && !error && !visible.length}<h3 class="text-center text-muted">Scoreboard is empty</h3>{/if}
</div>
