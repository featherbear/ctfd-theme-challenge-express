// Layout lasts only until the next page load.
(() => {
  const table = document.querySelector('.message-list table');
  const header = table.tHead.rows[0];
  const keys = ['status', 'subject', 'category', 'points'];
  const minimum = { status: 55, subject: 130, category: 90, points: 65 };
  let order = [...keys], widths = null, sort = null;
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
  function apply() {
    if (sort) {
      const value = row => {
        const cell = row.querySelector(`[data-column="${sort.key}"]`);
        return sort.key === 'status' ? Number(row.classList.contains('read')) : sort.key === 'points' ? Number(cell.textContent) : cell.textContent.trim();
      };
      const rows = [...table.tBodies[0].rows];
      rows.sort((a, b) => (sort.key === 'points' || sort.key === 'status' ? value(a) - value(b) : collator.compare(value(a), value(b))) * sort.direction);
      rows.forEach(row => table.tBodies[0].append(row));
    }
    for (const row of [header, ...table.tBodies[0].rows]) {
      const cells = new Map([...row.cells].map(cell => [cell.dataset.column, cell]));
      if ([...row.cells].some((cell, index) => cell.dataset.column !== order[index])) order.forEach(key => row.append(cells.get(key)));
    }
    if (widths) {
      let total = 0;
      for (const cell of header.cells) {
        cell.style.width = `${widths[cell.dataset.column]}px`;
        if (getComputedStyle(cell).display !== 'none') total += widths[cell.dataset.column];
      }
      table.style.width = `${total}px`;
    }
  }
  function capture() { widths = Object.fromEntries([...header.cells].map(cell => [cell.dataset.column, cell.getBoundingClientRect().width || minimum[cell.dataset.column]])); }
  function move(key, target) {
    if (!target || target === key) return;
    if (!widths) capture();
    const positions = new Map([...table.querySelectorAll('th, td')].map(cell => [cell, cell.getBoundingClientRect().left]));
    const index = order.indexOf(target);
    order.splice(order.indexOf(key), 1); order.splice(index, 0, key); apply();
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) positions.forEach((left, cell) => {
      const offset = left - cell.getBoundingClientRect().left;
      if (offset) cell.animate([{ transform: `translateX(${offset}px)` }, { transform: 'translateX(0)' }], { duration: 180, easing: 'ease-out' });
    });
  }
  [...header.cells].forEach((cell, index) => {
    const key = keys[index], label = cell.textContent;
    cell.dataset.column = key;
    cell.setAttribute('aria-sort', 'none');
    cell.innerHTML = `<button type="button" class="column-label" aria-label="${label} column. Click to sort. Drag or use Alt and arrow keys to move.">${label}<span class="column-sort" aria-hidden="true"></span></button><button type="button" class="column-resize" aria-label="Resize ${label} column"></button>`;
    const drag = cell.firstElementChild, resize = cell.lastElementChild;
    let suppressClick = false;
    drag.addEventListener('click', event => {
      if (suppressClick && event.detail !== 0) { suppressClick = false; return; }
      sort = { key, direction: sort?.key === key ? -sort.direction : 1 };
      [...header.cells].forEach(th => {
        const active = th.dataset.column === key;
        th.setAttribute('aria-sort', active ? (sort.direction === 1 ? 'ascending' : 'descending') : 'none');
        th.querySelector('.column-sort').textContent = active ? (sort.direction === 1 ? '▲' : '▼') : '';
      });
      apply();
    });
    drag.addEventListener('keydown', event => {
      if (!event.altKey || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const visible = order.filter(k => getComputedStyle(header.querySelector(`[data-column="${k}"]`)).display !== 'none');
      move(key, visible[visible.indexOf(key) + (event.key === 'ArrowRight' ? 1 : -1)]); drag.focus();
    });
    resize.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault(); capture(); widths[key] = Math.max(minimum[key], widths[key] + (event.key === 'ArrowRight' ? 10 : -10)); apply();
    });
    for (const control of [drag, resize]) {
      let gesture;
      let ghost;
      function clear() {
        ghost?.remove(); ghost = null; gesture = null;
        cell.classList.remove('column-dragging');
        header.querySelectorAll('.column-drop-before, .column-drop-after').forEach(th => th.classList.remove('column-drop-before', 'column-drop-after'));
      }
      control.addEventListener('pointerdown', event => {
        if (event.button !== 0 || !event.isPrimary) return;
        suppressClick = false;
        capture();
        const rect = cell.getBoundingClientRect();
        gesture = { x:event.clientX, y:event.clientY, offset:event.clientX - rect.left, width:widths[key] };
        control.setPointerCapture(event.pointerId);
      });
      control.addEventListener('pointermove', event => {
        if (!gesture) return;
        if (control === resize) { widths[key] = Math.max(minimum[key], gesture.width + event.clientX - gesture.x); apply(); return; }
        if (!ghost && Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y) > 5) {
          suppressClick = true;
          ghost = document.createElement('div'); ghost.className = 'column-drag-ghost'; ghost.textContent = label;
          ghost.setAttribute('aria-hidden', 'true'); ghost.style.width = `${gesture.width}px`;
          document.body.append(ghost); cell.classList.add('column-dragging');
        }
        if (ghost) {
          ghost.style.left = `${event.clientX - gesture.offset}px`; ghost.style.top = `${event.clientY + 12}px`;
          header.querySelectorAll('.column-drop-before, .column-drop-after').forEach(th => th.classList.remove('column-drop-before', 'column-drop-after'));
          const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('th');
          if (target?.parentElement === header && target !== cell) target.classList.add(order.indexOf(key) < order.indexOf(target.dataset.column) ? 'column-drop-after' : 'column-drop-before');
        }
      });
      control.addEventListener('pointerup', event => {
        if (!gesture) return;
        const target = document.elementFromPoint(event.clientX,event.clientY)?.closest('th');
        const moved = Boolean(ghost);
        clear();
        if (control.hasPointerCapture(event.pointerId)) control.releasePointerCapture(event.pointerId);
        if (control === drag && moved && target?.parentElement === header) move(key,target.dataset.column);
        control.focus();
      });
      control.addEventListener('lostpointercapture', clear);
      control.addEventListener('pointercancel', clear);
    }
  });
  window.inboxColumns = {apply};
  window.addEventListener('resize',apply);
  apply();
})();
