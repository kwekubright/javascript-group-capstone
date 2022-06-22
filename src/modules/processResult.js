import { showcase, likesApi, allHearts } from './variables.js';

const processResult = (prop) => {
  for (let i = 0; i < prop.length; i += 1) {
    let id = i;
    const { show } = prop[i];
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
      <button>Comments</button>
      <button>Reservations</button>
    </div>
  `;
  }
  let likesCounter = document.querySelectorAll('.likes-count')

  const fetchLikes = () => {
    fetch(likesApi)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
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

  allHearts.addEventListener('click', (e) => {
    if (!e.target.classList.contains('text-primary')) {
      if(e.target.classList.contains('bi-heart-fill')){
        let id = e.target.id;
        let obj = {
          "item_id": id
        }

        e.target.classList.add('text-primary')

        fetch(likesApi, {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then(fetchLikes());
    } 
    }
  })

};

export default processResult;