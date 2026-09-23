(() => {
  const box = document.querySelector('.xp-logon') || document.querySelector('.express-window');
  const handle = box?.querySelector('.logon-drag-handle, .window-drag-handle');
  if (!handle) return;
  let drag;
  const bounds = () => {
    const viewport = window.visualViewport;
    return {
      x: viewport?.offsetLeft || 0,
      y: viewport?.offsetTop || 0,
      width: viewport?.width || document.documentElement.clientWidth,
      height: Math.max(0, (viewport?.height || window.innerHeight) - (box.classList.contains('express-window') ? 34 : 0))
    };
  };
  function move(x, y) {
    const view = bounds();
    box.style.maxWidth = `${view.width}px`;
    box.style.maxHeight = `${view.height}px`;
    const rect = box.getBoundingClientRect();
    box.style.left = `${Math.max(view.x, Math.min(x, view.x + view.width - rect.width))}px`;
    box.style.top = `${Math.max(view.y, Math.min(y, view.y + view.height - rect.height))}px`;
  }
  const initial = box.getBoundingClientRect();
  box.classList.add('is-draggable');
  move(initial.left, initial.top);
  handle.addEventListener('pointerdown', event => {
    if (event.button !== 0 || !event.isPrimary) return;
    const rect = box.getBoundingClientRect();
    drag = { id: event.pointerId, x: event.clientX - rect.left, y: event.clientY - rect.top };
    handle.setPointerCapture(event.pointerId);
    handle.classList.add('is-dragging');
    event.preventDefault();
  });
  handle.addEventListener('pointermove', event => {
    if (drag?.id === event.pointerId) move(event.clientX - drag.x, event.clientY - drag.y);
  });
  function stop() { drag = null; handle.classList.remove('is-dragging'); }
  handle.addEventListener('pointerup', stop);
  handle.addEventListener('pointercancel', stop);
  handle.addEventListener('lostpointercapture', stop);
  handle.addEventListener('keydown', event => {
    const directions = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
    const direction = directions[event.key];
    if (!direction) return;
    event.preventDefault();
    const rect = box.getBoundingClientRect();
    const step = event.shiftKey ? 1 : 10;
    move(rect.left + direction[0] * step, rect.top + direction[1] * step);
  });
  function constrain() {
    const rect = box.getBoundingClientRect();
    move(rect.left, rect.top);
  }
  window.addEventListener('resize', constrain);
  window.visualViewport?.addEventListener('resize', constrain);
  window.visualViewport?.addEventListener('scroll', constrain);
  new ResizeObserver(constrain).observe(box);
})();
