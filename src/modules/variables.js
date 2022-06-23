const baseUrl = 'https://api.tvmaze.com/search/shows?q=girls';
const likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/30k7UkPeJYbggXrWr3FT/likes';
const involvementApiBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const involvementApiAppId = 'n3ZjGnxwLtBBfYN1KSvf';
const showcase = document.querySelector('#showcase');
const allHearts = document.querySelector('#showcase');
const movieNav = document.querySelector('.movie-nav');

export {
  baseUrl,
  showcase,
  likesApi,
  allHearts,
  movieNav,
  involvementApiBaseURL,
  involvementApiAppId,
};