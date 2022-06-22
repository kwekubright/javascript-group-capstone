import { baseUrl } from './variables.js';
import processResult from './processResult.js';
import getAllVideoFromApi from './getAllVideoFromApi.js';

const fetchData = () => {
  fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      processResult(data);
      getAllVideoFromApi(data)
    });
};

export default fetchData;