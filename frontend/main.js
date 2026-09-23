import { mount } from 'svelte';
import Challenges from './Challenges.svelte';

const target = document.getElementById('challenge-app');
target.replaceChildren();
mount(Challenges, { target, props: { config: window.init } });
