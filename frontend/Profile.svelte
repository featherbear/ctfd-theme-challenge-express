<script>
  import { onMount } from 'svelte';
  import Chart from './Chart.svelte';
  import { api } from './api.js';
  import { palette } from './colors.js';
  let { page, config } = $props();
  let solves = $state([]);
  let awards = $state([]);
  let failures = $state(0);
  let score = $state(null);
  let loading = $state(true);
  let error = $state('');
  let generation = 0;
  const percentage = $derived(solves.length + failures ? 100 * solves.length / (solves.length + failures) : 0);
  const categories = $derived.by(() => {
    const counts = new Map();
    solves.forEach(solve => counts.set(solve.challenge.category, (counts.get(solve.challenge.category) || 0) + 1));
    return [...counts].map(([name, count], i) => ({ name, count, percent: 100 * count / solves.length, color: palette[i % palette.length] }));
  });
  const series = $derived.by(() => {
    let total = 0;
    return [{ name: page.name, data: [...solves, ...awards].sort((a, b) => new Date(a.date) - new Date(b.date)).map(item => [new Date(item.date).getTime(), total += item.challenge?.value ?? item.value]) }];
  });
  async function load() {
    const current = ++generation;
    error = '';
    try {
      const id = page.private ? 'me' : page.id;
      const [solved, failed, earned, profile] = await Promise.all([api(`/users/${id}/solves`), api(`/users/${id}/fails`, undefined, { full: true }), api(`/users/${id}/awards`), page.private ? api('/users/me') : Promise.resolve(page)]);
      if (current !== generation) return;
      solves = solved; failures = failed.meta.count; awards = earned; score = profile.score;
    } catch (cause) { if (current === generation) error = cause.message; }
    finally { if (current === generation) loading = false; }
  }
  onMount(() => { load(); return () => generation++; });
</script>
<div class="jumbotron"><div class="container">
  <h1>{page.name}</h1>
  <div class="profile-badges">
    {#if page.official}<a class="badge bg-primary" href={`https://majorleaguecyber.org/u/${encodeURIComponent(page.name)}`}>Official</a>{/if}
    {#each [page.affiliation, page.country, page.bracket].filter(Boolean) as label}<span class="badge bg-primary">{label}</span>{/each}
  </div>
  {#each page.fields as field}<p>{field.name}: {field.value}</p>{/each}
  {#if page.place}<h2>{page.place} <small>place</small></h2>{/if}
  {#if score !== null}<h2>{score} <small>points</small></h2>{/if}
  {#if /^https?:\/\//i.test(page.website || '')}<a href={page.website} target="_blank" rel="noopener">Website <i class="fas fa-external-link-alt" aria-hidden="true"></i></a>{/if}
</div></div>
<div class="container">
  {#if loading}<p role="status">Loading profile...</p>{/if}
  {#if error}<div class="alert alert-danger" role="alert">{error} <button class="btn" onclick={load}>Retry</button></div>{/if}
  {#if solves.length || awards.length}
    <section class="profile-graphs" aria-label="Score breakdowns">
      <div class="profile-breakdowns">
        <div><div class="progress" aria-hidden="true"><div class="progress-bar" style={`width:${percentage}%;background:#25632a`}></div><div class="progress-bar" style={`width:${100 - percentage}%;background:#a12a20`}></div></div><p>Solves ({percentage.toFixed(2)}%) / Fails ({(100 - percentage).toFixed(2)}%)</p></div>
        <div><div class="progress" aria-hidden="true">{#each categories as category}<div class="progress-bar" style={`width:${category.percent}%;background:${category.color}`}></div>{/each}</div><div class="category-legend">{#each categories as category}<span><span class="legend-swatch" style={`background:${category.color}`}></span>{category.name} ({category.percent.toFixed(2)}%)</span>{/each}</div></div>
      </div>
      <Chart {series} />
    </section>
    {#if awards.length}<section aria-labelledby="awards-heading"><h3 id="awards-heading">Awards</h3><div class="profile-awards">{#each awards as award}<div><i class={`award-icon award-${award.icon} fa-2x`} aria-hidden="true"></i><h4>{award.name}</h4><p>{award.category || ''}</p><p>{award.description || ''}</p><strong>{award.value} points</strong></div>{/each}</div></section>{/if}
    <h3>Solves</h3><div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>Challenge</th><th>Category</th><th>Value</th><th>Time</th></tr></thead><tbody>
      {#each solves as solve}<tr><td><a href={`${config.urlRoot}/challenges#challenge-${solve.challenge.id}`}>{solve.challenge.name}</a></td><td>{solve.challenge.category}</td><td>{solve.challenge.value}</td><td><time datetime={solve.date}>{new Date(solve.date).toLocaleString()}</time></td></tr>{/each}
    </tbody></table></div>
  {:else if !loading && !error}<h3 class="text-muted text-center">No solves yet</h3>{/if}
</div>
