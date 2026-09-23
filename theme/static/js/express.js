/* Challenge state comes exclusively from CTFd. No flags or solves are stored locally. */
(() => {
  const $ = selector => document.querySelector(selector);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  let challenges = [], folder = 'All Challenges', view = 'all', selected = null, generation = 0;
  async function api(path, body) {
    const response = await fetch(`${window.init.urlRoot}/api/v1${path}`, {
      credentials: 'same-origin', method: body ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json', 'CSRF-Token': window.init.csrfNonce },
      ...(body ? {body: JSON.stringify(body)} : {})
    });
    if (response.status === 401) throw new Error('Please log in to continue.');
    let data;
    try { data = await response.json(); } catch { throw new Error('The server did not return a valid response. Please try again.'); }
    if (!response.ok || data.success === false) throw new Error(data.message || (typeof data.errors === 'string' ? data.errors : 'This request is unavailable. Please try again.'));
    return data.data;
  }
  function render() {
    const categories = [...new Set(challenges.map(c => c.category))];
    const unread = challenges.filter(c => !c.solved_by_me);
    const folderButton = (name, type, count) => `<button type="button" class="${view === type && folder === name ? 'active' : ''}" data-view="${type}" data-folder="${escape(name)}"><i class="fas fa-${type === 'unread' ? 'envelope' : 'folder'}" aria-hidden="true"></i>${escape(name)} (${count})</button>`;
    $('#folders').innerHTML = folderButton('All Challenges', 'all', unread.length)
      + folderButton('Unsolved Challenges', 'unread', unread.length)
      + '<hr class="folder-divider">'
      + categories.map(category => folderButton(category, 'category', unread.filter(c => c.category === category).length)).join('');
    $('#progress').textContent = `${challenges.filter(c => c.solved_by_me).length} of ${challenges.length} challenges solved`;
    $('#folder-heading').textContent = folder;
    $('#address').textContent = `Folders / ${folder}`;
    document.title = $('#window-title').textContent = `${window.init.appName} - ${folder}`;
    const query = $('#search').value.toLowerCase().trim();
    const visible = challenges.filter(c => (view === 'all' || (view === 'unread' ? !c.solved_by_me : c.category === folder)) && `${c.name} ${c.category}`.toLowerCase().includes(query));
    $('#challenge-rows').innerHTML = visible.map(c => `<tr class="${c.solved_by_me ? 'read' : 'unread'}"><td data-column="status"><i class="fas fa-envelope${c.solved_by_me ? '-open' : ''}" role="img" aria-label="${c.solved_by_me ? 'Solved' : 'Unsolved'}"></i></td><td data-column="subject"><button class="open-challenge" data-id="${c.id}">${escape(c.name)}</button></td><td data-column="category">${escape(c.category)}</td><td data-column="points">${c.value}</td></tr>`).join('');
    $('#board-status').textContent = visible.length ? '' : 'No challenges found.';
    window.inboxColumns?.apply();
  }
  async function load() {
    $('#retry').hidden = true;
    try { challenges = (await api('/challenges')).sort((a, b) => a.id - b.id); render(); }
    catch(error) { $('#board-status').textContent = error.message; $('#retry').hidden = false; }
  }
  function back() {
    generation++;
    $('#reader').hidden = true;
    $('.message-list').hidden = false;
    history.replaceState(null, '', location.pathname + location.search);
    $(`[data-id="${selected}"]`)?.focus();
  }
  async function open(id) {
    const ticket = ++generation;
    selected = id;
    $('.message-list').hidden = true;
    $('#reader').hidden = false;
    $('#message').textContent = 'Loading message...';
    try {
      const c = await api(`/challenges/${id}`);
      if (ticket !== generation) return;
      // CTFd renders Markdown and allowed challenge HTML in the supplied view.
      const challengeView = new DOMParser().parseFromString(c.view, 'text/html');
      c.description = challengeView.querySelector('.challenge-desc')?.innerHTML || escape(c.description);
      c.byline = c.attribution;
      history.replaceState(null, '', `#challenge-${id}`);
      $('#message').innerHTML = `<header class="message-header"><h2>${escape(c.name)}</h2><div>Category: ${escape(c.category)} &nbsp; Points: ${c.value}</div>${c.byline ? `<div>From: ${escape(c.byline)}</div>` : ''}</header><div class="message-body">${c.description}</div>${c.connection_info ? `<p>Connection: <code>${escape(c.connection_info)}</code></p>` : ''}<div class="attachments">${c.files.map(file => `<a href="${escape(file)}" download><i class="fas fa-paperclip" aria-hidden="true"></i> ${escape(decodeURIComponent(file.split('/').pop().split('?')[0]))}</a>`).join('')}</div><div id="hints">${c.hints.map(h => `<details data-hint="${h.id}"><summary>${escape(h.title || 'View hint')}${h.cost ? ` (${h.cost} points)` : ''}</summary><div class="hint-content"></div></details>`).join('')}</div><form class="reply"><label for="flag">Reply with flag</label><input id="flag" name="submission" autocomplete="off" required><button type="submit">Send</button><p id="submission-status" role="status">${c.solved_by_me ? 'Correct flag received.' : ''}</p>${c.max_attempts ? `<p>Attempts: <span id="attempts">${c.attempts}</span> / ${c.max_attempts}</p>` : ''}</form>`;
      $('#back').focus();
      $('#hints').querySelectorAll('details').forEach(details => details.addEventListener('toggle', async () => {
        if (!details.open || details.dataset.loaded) return;
        const target = details.querySelector('.hint-content');
        target.textContent = 'Loading hint...';
        try {
          let hint = await api(`/hints/${details.dataset.hint}`);
          if (!hint.content) {
            if (hint.cost > 0 && !confirm(`Unlock this hint for ${hint.cost} points?`)) { details.open = false; target.textContent = ''; return; }
            await api('/unlocks', { target: hint.id, type: 'hints' });
            hint = await api(`/hints/${hint.id}`);
          }
          target.innerHTML = hint.html || escape(hint.content);
          details.dataset.loaded = 'true';
        } catch(error) { target.textContent = error.message; }
      }));
      $('.reply').addEventListener('submit', async event => {
        event.preventDefault();
        const button = event.target.querySelector('button'), status = $('#submission-status');
        button.disabled = true;
        status.textContent = 'Sending...';
        try {
          const result = await api('/challenges/attempt', { challenge_id: id, submission: $('#flag').value });
          if (ticket !== generation) return;
          status.textContent = result.message;
          status.className = ['correct','already_solved'].includes(result.status) ? 'success' : 'error';
          if (result.status === 'authentication_required') location.href = `${window.init.urlRoot}/login?next=${encodeURIComponent(location.pathname + location.hash)}`;
          if (result.status === 'correct') $('#flag').value = '';
          if ($('#attempts')) { const updated = await api(`/challenges/${id}`); if (ticket === generation) $('#attempts').textContent = updated.attempts; }
          await load();
          if (ticket === generation && view === 'unread' && ['correct', 'already_solved'].includes(result.status)) {
            back();
            $('#board-status').textContent = 'Challenge solved. Removed from Unsolved Challenges.';
            $('#folders [data-view="unread"]').focus();
          }
        } catch(error) { status.textContent = error.message; status.className = 'error'; }
        finally { button.disabled = false; }
      });
    } catch(error) { if (ticket === generation) $('#message').textContent = error.message; }
  }
  $('#challenge-rows').addEventListener('click', event => { const button = event.target.closest('[data-id]'); if (button) open(Number(button.dataset.id)); });
  $('#folders').addEventListener('click', event => { const button = event.target.closest('[data-folder]'); if (button) { folder = button.dataset.folder; view = button.dataset.view; back(); render(); } });
  $('#all-challenges').addEventListener('click', () => { folder = 'All Challenges'; view = 'all'; $('#search').value = ''; back(); render(); });
  $('#search').addEventListener('input', () => { back(); render(); });
  $('#back').addEventListener('click', back);
  $('#retry').addEventListener('click', load);
  $('#help-button').addEventListener('click', () => $('#help-dialog').showModal());
  load().then(() => { const match = location.hash.match(/-(\d+)$/); if (match) open(Number(match[1])); });
})();
