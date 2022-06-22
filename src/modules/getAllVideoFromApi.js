import { movieNav } from "./variables";

const getAllVideoFromApi = (arr) => {
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    count++
  }
  movieNav.textContent = `Moive (${count})`

}

export default getAllVideoFromApi;