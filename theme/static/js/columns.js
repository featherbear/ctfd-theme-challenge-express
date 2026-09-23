// Layout lasts only until the next page load.
(() => {
  const table = document.querySelector('.message-list table');
  const header = table.tHead.rows[0];
  const keys = ['status', 'subject', 'category', 'points'];
  const minimum = { status: 55, subject: 130, category: 90, points: 65 };
  let order = [...keys], widths = null;
  function apply() {
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
  function move(key, target) { if (!target || target === key) return; if (!widths) capture(); const index = order.indexOf(target); order.splice(order.indexOf(key), 1); order.splice(index, 0, key); apply(); }
  [...header.cells].forEach((cell, index) => {
    const key = keys[index], label = cell.textContent;
    cell.dataset.column = key;
    cell.innerHTML = `<button type="button" class="column-label" aria-label="${label} column. Drag or use Alt and arrow keys to move.">${label}</button><button type="button" class="column-resize" aria-label="Resize ${label} column"></button>`;
    const drag = cell.firstElementChild, resize = cell.lastElementChild;
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
      control.addEventListener('pointerdown', event => { if (event.button !== 0) return; capture(); gesture = {x:event.clientX, width:widths[key]}; control.setPointerCapture(event.pointerId); });
      control.addEventListener('pointermove', event => { if (gesture && control === resize) { widths[key] = Math.max(minimum[key], gesture.width + event.clientX - gesture.x); apply(); } });
      control.addEventListener('pointerup', event => {
        if (!gesture) return;
        const target = document.elementFromPoint(event.clientX,event.clientY)?.closest('th');
        if (control === drag && Math.abs(event.clientX - gesture.x) > 5 && target?.parentElement === header) move(key,target.dataset.column);
        gesture = null; control.releasePointerCapture(event.pointerId); control.focus();
      });
      control.addEventListener('lostpointercapture', () => { gesture = null; });
    }
  });
  window.inboxColumns = {apply};
  window.addEventListener('resize',apply);
  apply();
})();
