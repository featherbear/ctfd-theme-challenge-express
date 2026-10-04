<script>
  import { onMount } from 'svelte';
  import Challenges from './Challenges.svelte';
  import Auth from './Auth.svelte';
  import Alerts from './Alerts.svelte';
  import Settings from './Settings.svelte';
  import Users from './Users.svelte';
  import Profile from './Profile.svelte';
  import Scoreboard from './Scoreboard.svelte';
  import Content from './Content.svelte';
  import NotificationCenter from './NotificationCenter.svelte';
  import { draggable } from './draggable.js';
  let { config, site, page, fallback } = $props();
  let menuOpen = $state(false);
  let unread = $state(0);
  const login = $derived(page.kind === 'login');
  const auth = $derived(['login', 'register', 'reset', 'confirm'].includes(page.kind));
  onMount(() => {
    document.body.classList.toggle('login-desktop', login);
    return () => document.body.classList.remove('login-desktop');
  });
</script>
<div class="express-window" use:draggable={!login}>
  <header class="express-title window-drag-handle" tabindex="0" role="button" aria-label="Move application window. Drag or use arrow keys." title="Drag to move, or focus and use arrow keys">
    {#if site.logo}<img class="express-brand-icon" src={site.logo} alt="" draggable="false" />{:else}<i class="fas fa-envelope" aria-hidden="true"></i>{/if}
    <span id="window-title">{site.title}</span>
  </header>
  {#if !login}
    <nav class="navbar navbar-expand-md" aria-label="Main navigation"><div class="container">
      <button class="navbar-toggler" type="button" aria-controls="base-navbars" aria-expanded={menuOpen} aria-label="Toggle navigation" onclick={() => menuOpen = !menuOpen}><i class="fas fa-bars" aria-hidden="true"></i> Menu</button>
      <div class="collapse navbar-collapse" class:show={menuOpen} id="base-navbars">
        {#each [site.primary, site.account] as links, group}<ul class="navbar-nav" class:me-auto={group === 0} class:ms-md-auto={group === 1}>
          {#each links as link}<li class="nav-item"><a class="nav-link" href={link.href} target={link.target || undefined} rel={link.target === '_blank' ? 'noopener' : undefined}>
            {#if link.label === 'Notifications'}<i class="fas fa-bell" aria-hidden="true"></i> {/if}{link.label}
            {#if link.label === 'Notifications' && unread > 0}<span class="badge bg-danger">{unread}</span>{/if}
          </a></li>{/each}
        </ul>{/each}
      </div>
    </div></nav>
  {/if}
  <main id="main-content">
    {#if auth}<Auth {page} {site} {config} />{:else}
      <Alerts errors={site.errors} infos={site.infos} />
      {#if page.kind === 'challenges'}<div id="challenge-app"><Challenges {config} /></div>
      {:else if page.kind === 'settings'}<Settings {page} />
      {:else if page.kind === 'users'}<Users {page} {config} />
      {:else if page.kind === 'profile'}<Profile {page} {config} />
      {:else if page.kind === 'scoreboard'}<Scoreboard />
      {:else if page.kind === 'page'}<Content html={page.html} />
      {:else if page.kind === 'error'}<div class="container error-page"><h1>{page.heading}</h1><h2>{page.code} {page.message}</h2>{#if page.detail}<p>{page.detail}</p>{/if}<a href={`${config.urlRoot}/challenges`}>Back to challenges</a></div>
      {:else if page.kind !== 'notifications'}{@html fallback}{/if}
    {/if}
    <NotificationCenter {page} {config} onunread={count => unread = count} />
  </main>
  <footer class="express-status">{site.eventName}<span>Powered by <a href="https://ctfd.io">CTFd</a></span></footer>
</div>
<div class="express-taskbar"><a href={`${config.urlRoot}/challenges`} class="express-start">Start</a><span>{site.appName}</span></div>
