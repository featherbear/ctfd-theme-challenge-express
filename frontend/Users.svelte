<script>
  import Field from './Field.svelte';
  let { page, config } = $props();
  function goToPage(event) {
    const url = new URL(location.href);
    url.searchParams.set('page', event.currentTarget.value);
    location.assign(url);
  }
</script>
<div class="jumbotron"><div class="container"><h1>Users</h1></div></div>
<div class="container">
  <form method="get" class="user-search">
    {#each page.fields as field}<Field {field} />{/each}
    <button type="submit" class="btn btn-primary"><i class="fas fa-search" aria-hidden="true"></i> Search</button>
  </form>
  <div class="table-responsive"><table class="table table-striped align-middle"><thead><tr><th>User</th><th>Website</th><th>Affiliation</th><th>Country</th></tr></thead><tbody>
    {#each page.users as user}<tr>
      <td>{#if page.scoresVisible}<a href={`${config.urlRoot}/users/${user.id}`}>{user.name}</a>{:else}{user.name}{/if}
        {#if user.bracket}<span class="badge bg-secondary ms-2">{user.bracket}</span>{/if}
        {#if user.official}<a href={`https://majorleaguecyber.org/u/${encodeURIComponent(user.name)}`} class="badge bg-primary ms-2">Official</a>{/if}
      </td>
      <td>{#if /^https?:\/\//i.test(user.website || '')}<a href={user.website} target="_blank" rel="noopener" aria-label={`Website for ${user.name}`}><i class="fas fa-external-link-alt" aria-hidden="true"></i></a>{/if}</td>
      <td>{user.affiliation || ''}</td><td>{user.country}</td>
    </tr>{/each}
  </tbody></table></div>
  {#if !page.users.length}<p role="status">No users match your search.</p>{/if}
  {#if page.pages > 1}<label class="pagination-control">Page <select class="page-select form-select" value={page.page} onchange={goToPage}>{#each Array.from({ length: page.pages }, (_, i) => i + 1) as number}<option value={number}>{number}</option>{/each}</select> of {page.pages} ({page.total} users)</label>{/if}
</div>
