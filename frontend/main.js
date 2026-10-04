import { mount } from 'svelte';
import App from './App.svelte';

const target = document.getElementById('site-app');
const page = JSON.parse(document.getElementById('page-data').textContent);
document.body.classList.toggle('login-desktop', page.kind === 'login');
target.replaceChildren();
mount(App, { target, props: {
  config: window.init,
  site: JSON.parse(document.getElementById('site-data').textContent),
  page,
  fallback: document.getElementById('fallback-content').innerHTML
} });
