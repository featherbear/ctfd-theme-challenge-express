const challenges = [
  { id: 'welcome', title: "You've got mail!", category: 'Getting Started', from: 'CTF Postmaster', email: 'postmaster@flagmail.local', points: 50, body: '<p>Hey there,</p><p>Welcome to your new inbox. Things are a little different around here: every email is a challenge, and every unread message has a flag waiting to be found.</p><p>Let’s make sure your reply button works. Send this flag back to me:</p><p><code>flag{youve_got_mail}</code></p><p>One down. A whole inbox to go.</p>', hint: 'Copy the flag above, including the curly braces, into your reply.', flag: 'flag{youve_got_mail}' },
  { id: 'source', title: 'RE: Have you tried viewing the source?', category: 'Web', from: 'Webmaster', email: 'webmaster@flagmail.local', points: 100, body: '<p>Hello again,</p><p>The old intranet has a habit of leaving things where everyone can see them. Someone hid a flag in the source of the attached page.</p><p>Download it and open it in a text editor. Sometimes the most interesting part of a page never appears on screen.</p>', file: 'intranet.html', content: '<!doctype html><title>Intranet</title><h1>Under construction</h1><!-- flag{read_between_the_tags} -->', hint: 'Look for an HTML comment.', flag: 'flag{read_between_the_tags}' },
  { id: 'rot', title: 'A message from thirteen letters away', category: 'Cryptography', from: 'Alice', email: 'alice@flagmail.local', points: 100, body: '<p>Hi,</p><p>Bob says my encryption is “a classic.” I’m choosing to take that as a compliment.</p><p><code>synt{ebgngvba_abg_rapelcgvba}</code></p><p>Can you translate that back into something the mail server understands?</p>', hint: 'ROT13 shifts each letter thirteen places through the alphabet.', flag: 'flag{rotation_not_encryption}' },
  { id: 'logs', title: 'FWD: Something strange in the access logs', category: 'Forensics', from: 'IT Support', email: 'support@flagmail.local', points: 150, body: '<p>Morning,</p><p>Someone sent a very unusual request to the server at 03:14. We’ve attached a small extract from the access log.</p><p>Find the request, decode its query value, and tell us what was sent.</p>', file: 'access.log', content: '03:12 GET /index.html 200\n03:13 GET /favicon.ico 200\n03:14 GET /drop?message=flag%7Bnothing_is_ever_deleted%7D 200\n03:15 GET /logout 302\n', hint: 'The message uses URL percent encoding: %7B is { and %7D is }.', flag: 'flag{nothing_is_ever_deleted}' },
  { id: 'robots', title: 'Please keep out of the staff directory', category: 'Web', from: 'Site Administrator', email: 'admin@flagmail.local', points: 150, body: '<p>To all staff,</p><p>We’ve asked every search engine very politely to stay away from our private directory. That should be enough security, right?</p><p>The attached crawler instructions may contain more information than intended.</p>', file: 'robots.txt', content: 'User-agent: *\nDisallow: /staff/\n# Temporary access token: flag{robots_are_not_security}\n', hint: 'Comments in robots.txt are public too.', flag: 'flag{robots_are_not_security}' },
  { id: 'binary', title: 'An attachment with a few loose strings', category: 'Reverse Engineering', from: 'Build Server', email: 'build@flagmail.local', points: 200, body: '<p>Build complete. Mostly.</p><p>Our demo firmware dump still has a debug message embedded in it. Examine the printable strings in the attachment to recover the flag.</p>', file: 'firmware-dump.txt', content: '00 FF 1A 00\nBOOT_OK\nDEBUG=1\nflag{strings_attached}\n00 9C FF 00\n', hint: 'Search the dump for the familiar flag prefix.', flag: 'flag{strings_attached}' },
  { id: 'base64', title: 'This is definitely not plain text', category: 'Cryptography', from: 'Bob', email: 'bob@flagmail.local', points: 150, body: '<p>Hey,</p><p>Alice told me to upgrade from letter shifting. This one even has numbers in it!</p><p><code>ZmxhZ3tlbmNvZGluZ19pc250X2VuY3J5cHRpb259</code></p><p>Surely no one can read that.</p>', hint: 'It is Base64. Encoding changes representation; it does not keep a secret.', flag: 'flag{encoding_isnt_encryption}' },
  { id: 'headers', title: 'The answer was in the headers all along', category: 'Forensics', from: 'Mail Delivery System', email: 'mailer-daemon@flagmail.local', points: 200, body: '<p>Delivery diagnostic attached.</p><p>A custom header slipped through our outgoing mail filter. Inspect the original message to see what it reveals.</p>', file: 'original-message.eml', content: 'From: sender@flagmail.local\nTo: you@flagmail.local\nSubject: Delivery test\nX-Flag: flag{check_the_headers}\n\nNothing to see here.\n', hint: 'Inspect the X-Flag header before the blank line.', flag: 'flag{check_the_headers}' }
];
const $ = id => document.getElementById(id);
const icon = name => `<svg class="icon" aria-hidden="true"><use href="#${name}"/></svg>`;
let saved = {};
try { saved = JSON.parse(localStorage.getItem('flagmail-progress') || '{}') || {}; } catch {}
const validIds = new Set(challenges.map(c => c.id));
const solved = new Set((Array.isArray(saved.solved) ? saved.solved : []).filter(id => validIds.has(id)));
let folder = 'All Challenges', selectedId = 'welcome', search = '';
const categories = [...new Set(challenges.map(c => c.category))];
function save() { try { localStorage.setItem('flagmail-progress', JSON.stringify({ solved: [...solved] })); return true; } catch { return false; } }
function matchesFolder(c) { return folder === 'All Challenges' || c.category === folder; }
function visibleMessages() { return challenges.filter(c => matchesFolder(c) && `${c.title} ${c.from} ${c.category}`.toLowerCase().includes(search)); }
function renderFolders() {
  $('folders').innerHTML = ['All Challenges', ...categories].map(name => {
    const count = challenges.filter(c => !solved.has(c.id) && (name === 'All Challenges' || c.category === name)).length;
    return `<button class="folder-button ${folder === name ? 'active' : ''}" data-folder="${name}" ${folder === name ? 'aria-current="page"' : ''}>${icon('folder')}<span>${name}</span><span class="count">${count ? `(${count})` : ''}</span></button>`;
  }).join('');
  $('progress-text').textContent = `${solved.size} of ${challenges.length} messages read`;
  $('progress-fill').style.width = `${solved.size / challenges.length * 100}%`;
  $('points-total').textContent = `${challenges.filter(c => solved.has(c.id)).reduce((sum,c) => sum + c.points, 0)} points earned`;
}
function renderList() {
  const visible = visibleMessages();
  $('folder-title').textContent = folder;
  document.title = `Challenge Express - ${folder}`;
  $('window-title').textContent = ` - ${folder}`;
  $('address').textContent = `Local Folders / ${folder}`;
  $('folder-summary').textContent = `${visible.length} messages · ${visible.filter(c => !solved.has(c.id)).length} unread`;
  $('messages').innerHTML = visible.map(c => `<tr class="message-row ${solved.has(c.id) ? '' : 'unread'} ${c.id === selectedId ? 'selected' : ''}" data-id="${c.id}"><td>${icon(solved.has(c.id) ? 'read' : 'mail')}<span class="sr-only">${solved.has(c.id) ? 'Read, solved' : 'Unread, unsolved'}</span></td><td><button class="subject-button" ${c.id === selectedId ? 'aria-current="true"' : ''}>${c.title}</button></td><td class="category-cell">${c.category}</td><td class="points-cell">${c.points}</td></tr>`).join('');
  $('empty').hidden = visible.length !== 0;
  window.inboxColumns?.apply();
  $('status').textContent = `${challenges.length} message(s), ${challenges.length - solved.size} unread`;
}
function renderReader() {
  const c = challenges.find(c => c.id === selectedId);
  $('reply-button').disabled = !c || solved.has(c.id);
  $('selected-status').textContent = c ? (solved.has(c.id) ? 'Read · challenge solved' : 'Unread · challenge unsolved') : 'No message selected';
  if (!c) { $('reader').innerHTML = '<p class="no-selection">Choose a folder or change your search to find a challenge.</p>'; return; }
  const isSolved = solved.has(c.id);
  $('reader').innerHTML = `<div class="message-header"><h2>${c.title}</h2><div class="metadata"><span>From:</span><b>${c.from} &lt;${c.email}&gt;</b><div class="message-value">${c.points} points<small>${isSolved ? 'Read / solved' : 'Unread / unsolved'}</small></div><span>To:</span><b>You &lt;player@flagmail.local&gt;</b></div></div><article class="message-body">${c.body}<p class="signature">- ${c.from}</p>${c.file ? `<a class="attachment" download="${c.file}" href="data:text/plain;charset=utf-8,${encodeURIComponent(c.content)}">${icon('clip')}${c.file}</a>` : ''}<details class="hint"><summary>Need a hint?</summary><p>${c.hint}</p></details></article><div class="reply-area"><label for="flag-input" class="reply-label">${icon('send')}Reply to this challenge with a flag</label><form class="reply-form" id="flag-form"><input id="flag-input" name="flag" placeholder="flag{your_answer_here}" autocomplete="off" spellcheck="false" required ${isSolved ? 'disabled' : ''} aria-describedby="reply-feedback"><button class="classic-button" ${isSolved ? 'disabled' : ''}>${icon('send')}${isSolved ? 'Read' : 'Send flag'}</button></form><p class="reply-feedback ${isSolved ? 'success' : ''}" id="reply-feedback" role="status">${isSolved ? 'Correct flag received.' : 'Sample challenge · flags are case-sensitive.'}</p></div>`;
  $('flag-form').addEventListener('submit', event => {
    event.preventDefault();
    if ($('flag-input').value.trim() !== c.flag) {
      $('reply-feedback').textContent = 'That flag is incorrect. Check your answer and try again.';
      $('reply-feedback').className = 'reply-feedback error';
      $('flag-input').setAttribute('aria-invalid', 'true');
      return;
    }
    solved.add(c.id);
    const persisted = save();
    renderFolders(); renderList(); renderReader();
    $('reply-feedback').textContent = `Correct! +${c.points} points.${persisted ? '' : ' Progress lasts for this session only; browser storage is unavailable.'}`;
    $('status').textContent = `Correct flag! ${challenges.length - solved.size} unread.`;
  });
}
function render() { renderFolders(); renderList(); renderReader(); }
function changeView() { document.querySelector('.main-pane').classList.remove('reading-message'); const visible = visibleMessages(); if (!visible.some(c => c.id === selectedId)) selectedId = visible[0]?.id || null; render(); }
$('folders').addEventListener('click', event => { const button = event.target.closest('[data-folder]'); if (button) { folder = button.dataset.folder; changeView(); } });
$('messages').addEventListener('click', event => { const row = event.target.closest('[data-id]'); if (row) { selectedId = row.dataset.id; renderList(); renderReader(); document.querySelector('.main-pane').classList.add('reading-message'); if (window.matchMedia('(max-width: 760px)').matches) $('back-to-inbox').focus(); } });
$('back-to-inbox').addEventListener('click', () => { document.querySelector('.main-pane').classList.remove('reading-message'); document.querySelector('.message-row.selected .subject-button')?.focus(); });
$('search').addEventListener('input', event => { search = event.target.value.trim().toLowerCase(); changeView(); });
$('reply-button').addEventListener('click', () => { document.querySelector('.main-pane').classList.add('reading-message'); $('flag-input')?.focus(); });
function resetView() { folder = 'All Challenges'; search = ''; $('search').value = ''; changeView(); }
$('all-button').addEventListener('click', resetView);
for (const id of ['help-button', 'start-button']) $(id).addEventListener('click', () => $('help-dialog').showModal());
function clock() { $('clock').textContent = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }); }
clock(); setInterval(clock, 60000); render();
