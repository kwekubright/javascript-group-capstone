import { baseUrl } from './variables.js';
import processResult from './processResult.js';

const fetchData = () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      processResult(data);
    });
};

export default fetchData;