import './styles/index.css';
import display from './modules/display.js';
import { showcase } from './modules/variables.js';

showcase.innerHtml = display();

const closeBtn = document.querySelector('.close-modal');
closeBtn.addEventListener('click', () => {
  document.getElementById('movie-modal').classList.add('hide');
});
