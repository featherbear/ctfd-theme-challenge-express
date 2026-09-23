<script>
  import { tick, untrack } from 'svelte';
  let { challenges, defaultOrder, onopen, hidden = false } = $props();
  const keys = ['status', 'subject', 'category', 'points'];
  const labels = { status: 'Status', subject: 'Subject', category: 'Category', points: 'Points' };
  const minimum = { status: 55, subject: 130, category: 90, points: 65 };
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  let order = $state([...keys]), widths = $state(null), table;
  // The administrator's order is a page-load default, not a live override.
  let sort = $state({ key: untrack(() => defaultOrder) === 'name' ? 'subject' : 'id', direction: 1 });
  let mobile = $state(window.innerWidth <= 760);
  let rows = $derived.by(() => {
    const value = c => ({ status: Number(c.solved_by_me), subject: c.name, category: c.category, points: c.value, id: c.id })[sort.key];
    return [...challenges].sort((a, b) => {
      const difference = ['id', 'points', 'status'].includes(sort.key) ? value(a) - value(b) : collator.compare(value(a), value(b));
      return difference * sort.direction || a.id - b.id;
    });
  });
  let tableWidth = $derived(widths ? order.filter(key => !mobile || key !== 'category').reduce((total, key) => total + widths[key], 0) : null);
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
      gesture = { x: event.clientX, y: event.clientY, offset: event.clientX - cell.getBoundingClientRect().left, width: widths[key] };
      control.setPointerCapture(event.pointerId);
    }
    function pointerMove(event) {
      if (!gesture) return;
      if (resize) { widths[key] = Math.max(minimum[key], gesture.width + event.clientX - gesture.x); return; }
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
      if (resize) { capture(); widths[key] = Math.max(minimum[key], widths[key] + direction * 10); }
      else {
        const visible = order.filter(k => !mobile || k !== 'category');
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
  <table bind:this={table} style:width={tableWidth ? `${tableWidth}px` : undefined}>
    <thead><tr>
      {#each order as key (key)}
        <th data-column={key} style:width={widths ? `${widths[key]}px` : undefined} aria-sort={sort.key === key ? (sort.direction === 1 ? 'ascending' : 'descending') : 'none'}>
          <button type="button" class="column-label" aria-label={`${labels[key]} column. Click to sort. Drag or use Alt and arrow keys to move.`} use:columnControl={{ key }}>
            {labels[key]}<span class="column-sort" aria-hidden="true">{sort.key === key ? (sort.direction === 1 ? '▲' : '▼') : ''}</span>
          </button><button type="button" class="column-resize" aria-label={`Resize ${labels[key]} column`} use:columnControl={{ key, resize: true }}></button>
        </th>
      {/each}
    </tr></thead>
    <tbody id="challenge-rows">
      {#each rows as challenge (challenge.id)}
        <tr class={challenge.solved_by_me ? 'read' : 'unread'}>
          {#each order as key (key)}
            <td data-column={key}>
              {#if key === 'status'}<i class={`fas fa-envelope${challenge.solved_by_me ? '-open' : ''}`} role="img" aria-label={challenge.solved_by_me ? 'Solved' : 'Unsolved'}></i>
              {:else if key === 'subject'}<button class="open-challenge" data-id={challenge.id} onclick={() => onopen(challenge.id)}>{challenge.name}</button>
              {:else if key === 'category'}{challenge.category}
              {:else}{challenge.value}{/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
