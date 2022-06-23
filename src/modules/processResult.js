import { showcase } from './variables.js';

const registerEvents = () => {
  const commentBtn = document.querySelectorAll('.movie-comment');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      fetch(`https://api.tvmaze.com/shows/${e.currentTarget.dataset.id}`)
        .then((res) => res.json())
        .then((data) => {
          document.getElementById('modal-movie-img').src = data.image.original;
          document.getElementById('modal-movie-title').innerHTML = data.name;
          document.getElementById('modal-movie-release-date').innerHTML = data.premiered;
          document.getElementById('modal-movie-description').innerHTML = data.summary;
          document.getElementById('modal-movie-rating').innerHTML = data.rating.average;
          document.getElementById('modal-movie-language').innerHTML = data.language;
          document.getElementById('comment-form').setAttribute('data-id', data.id);
          document.getElementById('movie-modal').classList.remove('hide');
        });
    });
  });
};

const processResult = (prop) => {
  for (let i = 0; i < prop.length; i += 1) {
    const { show } = prop[i];
    showcase.innerHTML += `
  <div class="movie">
    <img class="vid-img" src="${show.image.original}" alt="">
    <div>
      <p class="title">${show.name}</p>
      <div class="likes">
        <i class="bi bi-heart"></i>
        <small>0 likes</small>
      </div>
    </div>
    <button class="movie-comment" data-id="${show.id}">Comments</button>
    <button>Reservations</button>
  </div>
  `;
  }

  registerEvents();
};

export default processResult;
