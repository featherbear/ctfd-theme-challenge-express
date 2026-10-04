<script>
  let { html } = $props();
  // Custom pages are authored by CTFd administrators. Preserve their existing
  // script behavior as well as their HTML; scripts in {@html} are inert by default.
  function activateScripts(node) {
    let active = true;
    (async () => {
      for (const original of node.querySelectorAll('script')) {
        if (!active) break;
        const script = document.createElement('script');
        for (const attribute of original.attributes) script.setAttribute(attribute.name, attribute.value);
        script.textContent = original.textContent;
        const wait = script.src && !script.hasAttribute('async') ? new Promise(resolve => {
          script.async = false;
          script.onload = script.onerror = resolve;
        }) : null;
        original.replaceWith(script);
        if (wait) await wait;
      }
    })();
    return { destroy() { active = false; } };
  }
</script>
<div class="container custom-page" use:activateScripts>{@html html}</div>
