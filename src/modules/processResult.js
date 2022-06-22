import { likesApi } from "./variables";
import { showcase } from './variables.js';
const processResult = (prop) => {
  let arr = [];

  for (let i = 0; i < prop.length; i += 1) {
    let id = i;
    const { show } = prop[i];
    showcase.innerHTML += `
    <div class="movie">
      <img class="vid-img" src="${show.image.original}" alt="">
      <div>
        <p class="title">${show.name}</p>
        <div class="likes">
          <i class="bi bi-heart" id="item-${id}"></i>
          <small class="likes-count" id="item-${id}">0 likes</small>
        </div>
      </div>
      <button>Comments</button>
      <button>Reservations</button>
    </div>
  `;
    arr.push(`item-${id}`)

  }
  let likesCounter = document.querySelectorAll('.likes-count')

  const fetchLikes = () => {
    fetch(likesApi)
      .then((res) => res.json())
      .then((data) => {
        for(let i = 0; i < likesCounter.length; i++) {
          for(let j = 0; j < data.length; j++){
            if(likesCounter[i].id == data[j].item_id){
              likesCounter[i].textContent = data[j].likes + ' likes'
            }
          }
        }
      });
  };

  fetchLikes()
};

export default processResult;
