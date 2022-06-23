import { displayComments } from './RenderElement.mod.js';
import {
  showcase,
  baseUrl,
  involvementApiAppId,
  involvementApiBaseURL,
  allHearts,
  movieNav,
} from './variables.js';

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
          displayComments(data.id);
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

export const fetchData = () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      // generate placeholder for each movie
      for (let i = 0; i < data.length; i += 1) {
        const id = i;
        const { show } = data[i];
        showcase.innerHTML += `
        <div class="movie">
          <img class="vid-img" src="${show.image.original}" alt="">
          <div>
            <p class="title">${show.name}</p>
            <div class="likes">
              <i class="bi bi-heart-fill" id="item-${id}"></i>
              <small class="likes-count" id="item-${id}">0 likes</small>
            </div>
          </div>
         <button class="movie-comment" data-id="${show.id}">Comments</button>
          <button>Reservations</button>
        </div>
      `;
      }

      registerEvents();

      // likeCounter === like button for each movies
      const likesCounter = document.querySelectorAll('.likes-count');

      // fetch all likes from the involvement API and display likes for curresponding movie
      const fetchLikes = () => {
        fetch(`${involvementApiBaseURL}apps/${involvementApiAppId}/likes`)
          .then((res) => res.json())
          .then((data) => {
            for (let i = 0; i < likesCounter.length; i += 1) {
              for (let j = 0; j < data.length; j += 1) {
                if (likesCounter[i].id === data[j].item_id) {
                  likesCounter[i].textContent = `${data[j].likes} likes`;
                }
              }
            }
          });
      };
      fetchLikes();

      // add event listener to all likes button
      allHearts.addEventListener('click', (e) => {
        fetchLikes();

        if (!e.target.classList.contains('text-primary')) {
          if (e.target.classList.contains('bi-heart-fill')) {
            const { id } = e.target;
            const obj = {
              item_id: id,
            };

            // add color to the like button when user clicks
            e.target.classList.add('text-primary');

            // send the data to the API
            fetch(`${involvementApiBaseURL}apps/${involvementApiAppId}/likes`, {
              method: 'POST',
              body: JSON.stringify(obj),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
              .then(fetchLikes());
          }
        }
      });

      // count number of movies
      const count = data.length;

      // display number of movies in the nav-bar
      movieNav.textContent = `Moives (${count})`;
    });
};

export default processResult;