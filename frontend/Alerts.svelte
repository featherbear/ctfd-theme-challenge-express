<script>
  let { errors = [], infos = [] } = $props();
  let dismissed = $state([]);
</script>
{#each [...infos.map(text => ({ text, type: 'info' })), ...errors.map(text => ({ text, type: 'danger' }))] as alert, index}
  {#if !dismissed.includes(index)}
    <div class="alert alert-{alert.type} alert-dismissible" role="alert">
      <span>{#if alert.text.html}{@html alert.text.html}{:else}{alert.text.text ?? alert.text}{/if}</span><button type="button" class="btn-close" aria-label="Close" onclick={() => dismissed = [...dismissed, index]}></button>
    </div>
  {/if}
{/each}
