// Svelte action shared by the application frame and XP logon dialog.
export function draggable(box, enabled = true) {
  if (!enabled) return;
  const handle = box.querySelector('.logon-drag-handle, .window-drag-handle');
  if (!handle) return;
  let drag;
  const listeners = [];
  function listen(target, type, callback) {
    target?.addEventListener(type, callback);
    listeners.push(() => target?.removeEventListener(type, callback));
  }
  function move(x, y) {
    const viewport = window.visualViewport;
    const left = viewport?.offsetLeft || 0;
    const top = viewport?.offsetTop || 0;
    const width = viewport?.width || document.documentElement.clientWidth;
    const height = Math.max(0, (viewport?.height || innerHeight) - (box.classList.contains('express-window') ? 34 : 0));
    box.style.maxWidth = `${width}px`;
    box.style.maxHeight = `${height}px`;
    const rect = box.getBoundingClientRect();
    box.style.left = `${Math.max(left, Math.min(x, left + width - rect.width))}px`;
    box.style.top = `${Math.max(top, Math.min(y, top + height - rect.height))}px`;
  }
  const initial = box.getBoundingClientRect();
  box.classList.add('is-draggable');
  move(initial.left, initial.top);
  listen(handle, 'pointerdown', event => {
    if (event.button !== 0 || !event.isPrimary) return;
    const rect = box.getBoundingClientRect();
    drag = { id: event.pointerId, x: event.clientX - rect.left, y: event.clientY - rect.top };
    handle.setPointerCapture(event.pointerId);
    handle.classList.add('is-dragging');
    event.preventDefault();
  });
  listen(handle, 'pointermove', event => {
    if (drag?.id === event.pointerId) move(event.clientX - drag.x, event.clientY - drag.y);
  });
  const stop = () => { drag = null; handle.classList.remove('is-dragging'); };
  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) listen(handle, event, stop);
  listen(handle, 'keydown', event => {
    const direction = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
    if (!direction) return;
    event.preventDefault();
    const rect = box.getBoundingClientRect();
    const step = event.shiftKey ? 1 : 10;
    move(rect.left + direction[0] * step, rect.top + direction[1] * step);
  });
  const constrain = () => { const rect = box.getBoundingClientRect(); move(rect.left, rect.top); };
  listen(window, 'resize', constrain);
  listen(window.visualViewport, 'resize', constrain);
  listen(window.visualViewport, 'scroll', constrain);
  const observer = new ResizeObserver(constrain);
  observer.observe(box);
  return { destroy() { observer.disconnect(); listeners.forEach(remove => remove()); } };
}
