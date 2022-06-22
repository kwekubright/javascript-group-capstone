import { allHearts } from './variables.js';
import { likesApi } from './variables.js';

class Like {
  post() {
    allHearts.addEventListener('click', (e) => {
      if(e.target.classList.contains('bi-heart')){
        let id = e.target.id;
        let obj = {
          "item_id": id
        }

        fetch(likesApi, {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json());
      }
    })
  }
}

export default Like;