<script>
  import { untrack } from 'svelte';
  let { field, compact = false } = $props();
  let value = $state(untrack(() => field.type === 'SelectField' ? String(field.value ?? '') : field.value ?? ''));
  let checked = $state(untrack(() => field.value === true || field.value === 'True' || field.value === 'true'));
  const types = { PasswordField: 'password', EmailField: 'email', URLField: 'url', DateField: 'date', IntegerField: 'number', HiddenField: 'hidden' };
  const autocomplete = $derived(field.name === 'name' ? 'username' : field.name === 'email' ? 'email' : field.name === 'confirm' ? 'current-password' : field.type === 'PasswordField' ? (compact ? 'current-password' : 'new-password') : undefined);
</script>
<div class:logon-field={compact} class:mb-3={!compact}>
  <label for={field.id} class="form-label">{field.label}{#if field.required}<span class="text-danger" aria-hidden="true"> *</span>{/if}</label>
  {#if field.type === 'SelectField'}
    <select id={field.id} name={field.name} class="form-select" bind:value required={field.required}>
      {#each field.choices as [key, label]}<option value={String(key)}>{label}</option>{/each}
    </select>
  {:else if field.type === 'BooleanField'}
    <input id={field.id} name={field.name} type="checkbox" class="form-check-input" bind:checked value="y" required={field.required} />
  {:else if field.type === 'TextAreaField'}
    <textarea id={field.id} name={field.name} class="form-control" bind:value required={field.required}></textarea>
  {:else}
    <input id={field.id} name={field.name} type={types[field.type] || 'text'} class="form-control" bind:value {autocomplete} required={field.required} />
  {/if}
  {#if field.description && !compact}<small class="form-text text-muted">{field.description}</small>{/if}
</div>
