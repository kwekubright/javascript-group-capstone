import { baseUrl, movieNav, showcase, likesApi, allHearts } from './variables.js';

// fetch movies from the API
const fetchData = () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {

      // generate placeholder for each movie
      for (let i = 0; i < data.length; i += 1) {
        let id = i;
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
          <button>Comments</button>
          <button>Reservations</button>
        </div>
      `;
      }

    // likeCounter === like button for each movies
    let likesCounter = document.querySelectorAll('.likes-count');

    
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

    allHearts.addEventListener('click', (e) => {
      fetchLikes()

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
          .then(fetchLikes()
          )
      } 
      }
    })

    let count = data.length;
    movieNav.textContent = `Moives (${count})`
  });

};

export {
  fetchData,
}