import { loadHeader } from './components/header.js';
import { loadFooter } from './components/footer.js';

document.getElementById('header').innerHTML = loadHeader();

document.getElementById('footer').innerHTML = loadFooter();