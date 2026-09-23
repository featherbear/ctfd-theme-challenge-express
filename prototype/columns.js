// Column preferences intentionally live only in memory for this page load.
(() => {
  const table = document.querySelector('.message-list table');
  const header = table.tHead.rows[0];
  const originalOrder = ['status', 'subject', 'category', 'points'];
  const labels = { status: 'Status', subject: 'Subject', category: 'Category', points: 'Points' };
  const minimums = { status: 38, subject: 130, category: 90, points: 65 };
  let order = [...originalOrder];
  let widths = null;
  let gesture = null;

  function apply() {
    const rows = [header, ...table.tBodies[0].rows];
    for (const row of rows) {
      [...row.cells].forEach((cell, index) => {
        if (!cell.dataset.column) cell.dataset.column = originalOrder[index];
      });
      const cells = new Map([...row.cells].map(cell => [cell.dataset.column, cell]));
      if ([...row.cells].some((cell, index) => cell.dataset.column !== order[index])) {
        for (const key of order) row.append(cells.get(key));
      }
    }
    if (widths) {
      let total = 0;
      for (const cell of header.cells) {
        const key = cell.dataset.column;
        cell.style.width = `${widths[key]}px`;
        if (getComputedStyle(cell).display !== 'none') total += widths[key];
      }
      table.style.width = `${total}px`;
    }
  }

  function captureWidths() {
    widths = Object.fromEntries([...header.cells].map(cell => {
      const key = cell.dataset.column;
      return [key, cell.getBoundingClientRect().width || widths?.[key] || minimums[key]];
    }));
  }

  function move(key, target) {
    if (key === target) return;
    const from = order.indexOf(key);
    const to = order.indexOf(target);
    order.splice(from, 1);
    order.splice(to, 0, key);
    apply();
  }

  for (const [index, cell] of [...header.cells].entries()) {
    const key = originalOrder[index];
    cell.dataset.column = key;
    cell.scope = 'col';
    const label = document.createElement('button');
    label.type = 'button';
    label.className = 'column-label';
    label.innerHTML = cell.innerHTML;
    label.setAttribute('aria-label', `${labels[key]} column. Drag to move, or press Alt and an arrow key.`);
    label.title = 'Drag to move · Alt + Left/Right to move with keyboard';
    const handle = document.createElement('button');
    handle.type = 'button';
    handle.className = 'column-resize';
    handle.setAttribute('aria-label', `Resize ${labels[key]} column`);
    handle.title = 'Drag to resize · Left/Right to adjust with keyboard';
    cell.replaceChildren(label, handle);

    label.addEventListener('keydown', event => {
      if (!event.altKey || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const visible = order.filter(id => getComputedStyle(header.querySelector(`[data-column="${id}"]`)).display !== 'none');
      const target = visible[visible.indexOf(key) + (event.key === 'ArrowRight' ? 1 : -1)];
      if (target) move(key, target);
      label.focus();
    });
    handle.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      captureWidths();
      widths[key] = Math.max(minimums[key], widths[key] + (event.key === 'ArrowRight' ? 10 : -10));
      apply();
      handle.focus();
    });

    for (const [control, kind] of [[label, 'move'], [handle, 'resize']]) {
      control.addEventListener('pointerdown', event => {
        if (event.button !== 0 || gesture) return;
        if (kind === 'resize') captureWidths();
        gesture = { key, kind, startX: event.clientX, width: widths?.[key], pointerId: event.pointerId, control };
        control.setPointerCapture(event.pointerId);
      });
      control.addEventListener('pointermove', event => {
        if (!gesture || gesture.control !== control) return;
        if (gesture.kind === 'resize') {
          widths[key] = Math.max(minimums[key], gesture.width + event.clientX - gesture.startX);
          apply();
        } else if (Math.abs(event.clientX - gesture.startX) > 5) {
          header.querySelectorAll('.column-drop-target').forEach(th => th.classList.remove('column-drop-target'));
          const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('th');
          if (target?.parentElement === header && target !== cell) target.classList.add('column-drop-target');
          cell.classList.add('column-moving');
        }
      });
      control.addEventListener('pointerup', event => {
        if (!gesture || gesture.control !== control) return;
        const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('th');
        const shouldMove = gesture.kind === 'move' && Math.abs(event.clientX - gesture.startX) > 5;
        control.releasePointerCapture(event.pointerId);
        gesture = null;
        header.querySelectorAll('.column-drop-target, .column-moving').forEach(th => th.classList.remove('column-drop-target', 'column-moving'));
        if (shouldMove && target?.parentElement === header) move(key, target.dataset.column);
        control.focus();
      });
      control.addEventListener('lostpointercapture', () => {
        if (gesture?.control === control) gesture = null;
        header.querySelectorAll('.column-drop-target, .column-moving').forEach(th => th.classList.remove('column-drop-target', 'column-moving'));
      });
    }
  }
  window.inboxColumns = { apply };
  window.addEventListener('resize', apply);
  apply();
})();
