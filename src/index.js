import './styles/index.css';
import display from './modules/display.js';
import { showcase } from './modules/variables.js';
import ApiServices from './modules/ApiServices.mod.js';
import 'animate.css';

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
  );
});

const showMoreBtn = document.querySelector('#show-more-btn');
showMoreBtn.addEventListener('click', () => {
  const movies = document.querySelectorAll('.m-hide');
  if (movies.length === 1) {
    showMoreBtn.classList.add('hide');
  }
  movies.forEach((movie, index) => {
    if (index < 8) {
      movie.classList.remove('m-hide');
    }
  });
});