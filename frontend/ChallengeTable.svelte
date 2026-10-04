<script>
  import { tick, untrack } from 'svelte';
  let { challenges, defaultOrder, onopen, hidden = false, solvesEnabled = false } = $props();
  const keys = ['status', 'subject', 'points', 'category', 'solves'];
  const labels = { status: 'Status', subject: 'Subject', category: 'Category', points: 'Points', solves: 'Solves' };
  const minimum = { status: 55, subject: 130, category: 90, points: 65, solves: 65 };
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  let order = $state([...keys]), widths = $state(null), table;
  let userSized = false;
  const measureContext = document.createElement('canvas').getContext('2d');
  let columns = $derived(order.filter(key => key !== 'solves' || solvesEnabled));
  // The administrator's order is a page-load default, not a live override.
  let sort = $state({ key: untrack(() => defaultOrder) === 'name' ? 'subject' : 'id', direction: 1 });
  let mobile = $state(window.innerWidth <= 760);
  let visibleColumns = $derived(columns.filter(key => !mobile || key !== 'category'));
  let rows = $derived.by(() => {
    const sortKey = sort.key === 'solves' && !solvesEnabled ? 'id' : sort.key;
    const value = c => ({ status: Number(c.solved_by_me), subject: c.name, category: c.category, points: c.value, solves: c.solves ?? -1, id: c.id })[sortKey];
    return [...challenges].sort((a, b) => {
      const difference = ['id', 'points', 'status', 'solves'].includes(sortKey) ? value(a) - value(b) : collator.compare(value(a), value(b));
      return difference * sort.direction || collator.compare(a.name, b.name) || a.id - b.id;
    });
  });
  function fit() {
    if (!table || hidden) return;
    const available = table.parentElement.clientWidth;
    if (!available) return;
    const preferred = {};
    for (const key of columns) {
      const heading = table.querySelector(`th[data-column="${key}"] .column-label`);
      const headingStyle = heading ? getComputedStyle(heading) : null;
      measureContext.font = headingStyle?.font || 'bold 12px Tahoma';
      const horizontalSpace = style => style ? ['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth']
        .reduce((sum, property) => sum + (parseFloat(style[property]) || 0), 0) : 0;
      const arrow = heading?.querySelector('.column-sort');
      const arrowStyle = arrow ? getComputedStyle(arrow) : null;
      const arrowSpace = arrow ? arrow.getBoundingClientRect().width
        + (parseFloat(arrowStyle.marginLeft) || 0) + (parseFloat(arrowStyle.marginRight) || 0) : 15;
      // Include both cell and button chrome, plus the inactive arrow slot.
      minimum[key] = Math.ceil(measureContext.measureText(labels[key]).width + arrowSpace
        + horizontalSpace(headingStyle) + horizontalSpace(heading ? getComputedStyle(heading.closest('th')) : null)) + 2;
      const cell = table.querySelector(`td[data-column="${key}"]`);
      const style = cell ? getComputedStyle(cell) : null;
      measureContext.font = style ? `bold ${style.fontSize} ${style.fontFamily}` : 'bold 12px Tahoma';
      const content = challenges.map(c => ({ subject: c.name, category: c.category, points: c.value, solves: c.solves ?? '-' })[key] ?? '');
      preferred[key] = Math.max(minimum[key], ...content.map(text => Math.ceil(measureContext.measureText(String(text)).width) + 24));
    }
    const next = { ...preferred, ...(userSized ? widths : {}) };
    let remaining = available - visibleColumns.reduce((sum, key) => sum + next[key], 0);
    if (remaining >= 0) next.subject += remaining;
    else {
      for (const key of ['subject', 'category', 'status', 'points', 'solves'].filter(key => visibleColumns.includes(key))) {
        const reduction = Math.min(-remaining, Math.max(0, next[key] - minimum[key]));
        next[key] -= reduction; remaining += reduction;
      }
      if (remaining < 0) {
        const total = visibleColumns.reduce((sum, key) => sum + next[key], 0);
        for (const key of visibleColumns) next[key] *= available / total;
      }
    }
    widths = next;
  }
  function observeSize(node) {
    const observer = new ResizeObserver(fit);
    observer.observe(node.parentElement);
    return { destroy() { observer.disconnect(); } };
  }
  $effect(() => { visibleColumns; hidden; challenges; untrack(() => tick().then(fit)); });
  function resizePair(key, delta, initial = widths) {
    userSized = true;
    const next = visibleColumns[visibleColumns.indexOf(key) + 1];
    if (!next) return;
    const change = Math.max(Math.min(0, minimum[key] - initial[key]), Math.min(delta, Math.max(0, initial[next] - minimum[next])));
    widths = { ...widths, [key]: initial[key] + change, [next]: initial[next] - change };
  }
  function capture() {
    widths = Object.fromEntries([...table.tHead.rows[0].cells].map(cell => [cell.dataset.column, cell.getBoundingClientRect().width || minimum[cell.dataset.column]]));
  }
  async function move(key, target) {
    if (!target || target === key) return;
    if (!widths) capture();
    const positions = new Map([...table.querySelectorAll('th,td')].map(cell => [cell, cell.getBoundingClientRect().left]));
    const index = order.indexOf(target);
    const next = order.filter(item => item !== key);
    next.splice(index, 0, key); order = next;
    await tick();
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) positions.forEach((left, cell) => {
      const offset = left - cell.getBoundingClientRect().left;
      if (offset) cell.animate([{ transform: `translateX(${offset}px)` }, { transform: 'translateX(0)' }], { duration: 180, easing: 'ease-out' });
    });
  }
  // Pointer capture and the floating preview are imperative. Column order and
  // widths remain Svelte state; no external code rearranges framework-owned DOM.
  function columnControl(control, { key, resize = false }) {
    const cell = control.closest('th');
    let gesture, ghost, suppressClick = false;
    function clear() {
      ghost?.remove(); ghost = null; gesture = null;
      cell.classList.remove('column-dragging');
      table.querySelectorAll('.column-drop-before,.column-drop-after').forEach(el => el.classList.remove('column-drop-before', 'column-drop-after'));
    }
    function down(event) {
      if (event.button !== 0 || !event.isPrimary) return;
      suppressClick = false; capture();
      gesture = { x: event.clientX, y: event.clientY, offset: event.clientX - cell.getBoundingClientRect().left, width: widths[key], widths: { ...widths } };
      control.setPointerCapture(event.pointerId);
    }
    function pointerMove(event) {
      if (!gesture) return;
      if (resize) { resizePair(key, event.clientX - gesture.x, gesture.widths); return; }
      if (!ghost && Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 5) {
        suppressClick = true;
        ghost = document.createElement('div'); ghost.className = 'column-drag-ghost'; ghost.textContent = labels[key];
        ghost.setAttribute('aria-hidden', 'true'); ghost.style.width = `${gesture.width}px`;
        document.body.append(ghost); cell.classList.add('column-dragging');
      }
      if (ghost) {
        ghost.style.left = `${event.clientX - gesture.offset}px`; ghost.style.top = `${event.clientY + 12}px`;
        table.querySelectorAll('.column-drop-before,.column-drop-after').forEach(el => el.classList.remove('column-drop-before', 'column-drop-after'));
        const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('th');
        if (target?.parentElement === cell.parentElement && target !== cell) target.classList.add(order.indexOf(key) < order.indexOf(target.dataset.column) ? 'column-drop-after' : 'column-drop-before');
      }
    }
    function up(event) {
      if (!gesture) return;
      const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('th');
      const moved = Boolean(ghost);
      clear();
      if (control.hasPointerCapture(event.pointerId)) control.releasePointerCapture(event.pointerId);
      if (!resize && moved && target?.parentElement === cell.parentElement) move(key, target.dataset.column);
      control.focus();
    }
    function click(event) {
      if (resize) return;
      if (suppressClick && event.detail !== 0) { suppressClick = false; return; }
      sort = { key, direction: sort.key === key ? -sort.direction : 1 };
    }
    function keydown(event) {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || (!resize && !event.altKey)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      if (resize) { capture(); resizePair(key, direction * 10); }
      else {
        const visible = columns.filter(k => !mobile || k !== 'category');
        move(key, visible[visible.indexOf(key) + direction]);
      }
    }
    const listeners = { pointerdown: down, pointermove: pointerMove, pointerup: up, pointercancel: clear, lostpointercapture: clear, click, keydown };
    Object.entries(listeners).forEach(([type, handler]) => control.addEventListener(type, handler));
    return { destroy() { clear(); Object.entries(listeners).forEach(([type, handler]) => control.removeEventListener(type, handler)); } };
  }
</script>

<svelte:window onresize={() => mobile = window.innerWidth <= 760} />
<div class="message-list" {hidden}>
  <table bind:this={table} use:observeSize style:width="100%">
    <thead><tr>
      {#each columns as key (key)}
        <th data-column={key} style:width={widths ? `${widths[key] ?? minimum[key]}px` : undefined} aria-sort={sort.key === key ? (sort.direction === 1 ? 'ascending' : 'descending') : 'none'}>
          <button type="button" class="column-label" aria-label={`${labels[key]} column. Click to sort. Drag or use Alt and arrow keys to move.`} use:columnControl={{ key }}>
            {labels[key]}<span class="column-sort" aria-hidden="true">{sort.key === key ? (sort.direction === 1 ? '▲' : '▼') : ''}</span>
          </button>{#if visibleColumns.includes(key) && key !== visibleColumns.at(-1)}<button type="button" class="column-resize" aria-label={`Resize ${labels[key]} column`} use:columnControl={{ key, resize: true }}></button>{/if}
        </th>
      {/each}
    </tr></thead>
    <tbody id="challenge-rows">
      {#each rows as challenge (challenge.id)}
        <tr class={challenge.solved_by_me ? 'read' : 'unread'}>
          {#each columns as key (key)}
            <td data-column={key}>
              {#if key === 'status'}<i class={`fas fa-envelope${challenge.solved_by_me ? '-open' : ''}`} role="img" aria-label={challenge.solved_by_me ? 'Solved' : 'Unsolved'}></i>
              {:else if key === 'subject'}<button class="open-challenge" data-id={challenge.id} onclick={() => onopen(challenge.id)}>{challenge.name}</button>
              {:else if key === 'category'}{challenge.category}
              {:else if key === 'solves'}{challenge.solves ?? '-'}
              {:else}{challenge.value}{/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
