import './styles/index.css';
import display from './modules/display.js';
import { showcase } from './modules/variables.js';
import ApiServices from './modules/ApiServices.mod.js';
import { displayComments } from './modules/RenderElement.mod.js';

showcase.innerHtml = display();

const closeBtn = document.querySelector('.close-modal');
closeBtn.addEventListener('click', () => {
  document.getElementById('movie-modal').classList.add('hide');
});

const commentsForm = document.querySelector('#comment-form');
commentsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  ApiServices.pushComment(
    e.currentTarget.dataset.id,
    e.currentTarget.comment.value,
    e.currentTarget.name.value,
  )
});