import { showcase } from "./variables";
const processResult = (prop) => {
  for(let i = 0; i < prop.length; i++){
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
    <button>Comments</button>
    <button>Reservations</button>
  </div>
  `
  }
}

export default processResult;
