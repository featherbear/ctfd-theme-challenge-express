<script>
  import { api } from './api.js';
  let { hint } = $props();
  let opened = $state(false), loading = $state(false), content = $state(null), error = $state('');
  async function reveal(event) {
    opened = event.currentTarget.open;
    if (!opened || loading || content) return;
    loading = true;
    error = '';
    try {
      let result = await api(`/hints/${hint.id}`);
      if (!result.content) {
        if (result.cost > 0 && !confirm(`Unlock this hint for ${result.cost} points?`)) { opened = false; return; }
        await api('/unlocks', { target: hint.id, type: 'hints' });
        result = await api(`/hints/${hint.id}`);
      }
      content = result;
    } catch (failure) { error = failure.message; }
    finally { loading = false; }
  }
</script>

<details data-hint={hint.id} bind:open={opened} ontoggle={reveal}>
  <summary>{hint.title || 'View hint'}{hint.cost ? ` (${hint.cost} points)` : ''}</summary>
  <div class="hint-content">
    {#if loading}Loading hint...
    {:else if error}{error}
    {:else if content?.html}{@html content.html}
    {:else if content}{content.content}{/if}
  </div>
</details>
