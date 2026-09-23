<script>
  import { onDestroy, untrack } from 'svelte';
  import { api } from './api.js';
  import Hint from './Hint.svelte';
  let { challenge, onattempt } = $props();
  let flag = $state(''), sending = $state(false), message = $state(''), status = $state('');
  let attempts = $state(untrack(() => challenge.attempts));
  let active = true;
  let feedback = $derived(message || (challenge.solved_by_me ? 'Correct flag received.' : ''));
  let feedbackStyle = $derived(status || (sending ? 'pending' : challenge.solved_by_me ? 'success' : ''));
  onDestroy(() => { active = false; });
  const description = $derived(new DOMParser().parseFromString(challenge.view || '', 'text/html').querySelector('.challenge-desc')?.innerHTML);
  function filename(file) {
    const name = file.split('/').pop().split('?')[0];
    try { return decodeURIComponent(name); } catch { return name; }
  }
  async function submit(event) {
    event.preventDefault();
    if (sending) return;
    sending = true;
    message = 'Sending...'; status = '';
    try {
      const result = await api('/challenges/attempt', { challenge_id: challenge.id, submission: flag });
      if (!active) return;
      message = result.message;
      // delayed-result returns an unsuccessful attempt while holding the answer.
      // Match its receipt, not every incorrect result from a delayed challenge:
      // after expiry those challenges return genuine correct/incorrect results.
      const held = challenge.type === 'delayed' && result.status === 'incorrect'
        && /^Your submission has been taken(?:\.|$)/.test(result.message || '');
      status = ['correct', 'already_solved'].includes(result.status) ? 'success' : held ? 'info' : 'error';
      if (result.status === 'authentication_required') location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`;
      if (result.status === 'correct') flag = '';
      if (challenge.max_attempts) {
        const updated = await api(`/challenges/${challenge.id}`);
        if (!active) return;
        attempts = updated.attempts;
      }
      await onattempt(result);
    } catch (error) { if (active) { message = error.message; status = 'error'; } }
    finally { sending = false; }
  }
</script>

<header class="message-header">
  <h2>{challenge.name}</h2>
  <div>Category: {challenge.category} &nbsp; Points: {challenge.value}</div>
  {#if challenge.tags?.length}
    <div class="challenge-tags"><span>Tags:</span>{#each challenge.tags as tag}<span class="challenge-tag">{typeof tag === 'string' ? tag : tag.value}</span>{/each}</div>
  {/if}
  {#if challenge.attribution}<div>From: {challenge.attribution}</div>{/if}
</header>
<div class="message-body">
  {#if description}{@html description}{:else}{challenge.description}{/if}
</div>
{#if challenge.connection_info}<p>Connection: <code>{challenge.connection_info}</code></p>{/if}
<div class="attachments">
  {#each challenge.files || [] as file}
    <a href={file} download><i class="fas fa-paperclip" aria-hidden="true"></i> {filename(file)}</a>
  {/each}
</div>
<div id="hints">{#each challenge.hints || [] as hint (hint.id)}<Hint {hint} />{/each}</div>
<form class="reply" onsubmit={submit}>
  <label for="flag">Reply with flag</label>
  <input id="flag" name="submission" autocomplete="off" required bind:value={flag}>
  <button type="submit" disabled={sending}>Send</button>
  <div id="submission-status" class={`submission-feedback ${feedbackStyle}`} role="status" aria-atomic="true" hidden={!feedback}>
    {#if feedback}<i class={`fas ${feedbackStyle === 'success' ? 'fa-check-circle' : feedbackStyle === 'error' ? 'fa-times-circle' : feedbackStyle === 'info' ? 'fa-info-circle' : 'fa-paper-plane'}`} aria-hidden="true"></i><strong>{feedback}</strong>{/if}
  </div>
  {#if challenge.max_attempts}<p>Attempts: <span id="attempts">{attempts}</span> / {challenge.max_attempts}</p>{/if}
</form>
