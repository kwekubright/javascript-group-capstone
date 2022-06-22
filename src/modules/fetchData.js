import { baseUrl, movieNav } from './variables.js';
import processResult from './processResult.js';

const fetchData = () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      processResult(data);
      let count = 0;
      data.forEach(item => {
        count++
      })
      movieNav.textContent = `Moives (${count})`
    });
};

export default fetchData;