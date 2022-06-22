import '../styles/index.css';

import { allHearts } from './variables.js';
import { likesApi } from './variables.js';

class Like {
  post() {
    allHearts.addEventListener('click', (e) => {
      if (!e.target.classList.contains('text-primary')) {
        if(e.target.classList.contains('bi-heart-fill')){
          let id = e.target.id;
          let obj = {
            "item_id": id
          }
          console.log(e.target)
          e.target.classList.add('text-primary')
      
          fetch(likesApi, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json());
      } 
      }
    })
  }
}

export default Like;