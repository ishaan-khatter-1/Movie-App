export const BASE_IMG_URL = 'https://image.tmdb.org/t/p/';

export const BASE_URL = 'https://api.themoviedb.org/3/';

const ApiKey = 'e3f2e72862408e5e3942f7d2684da6a8';

export const TRENDING_URL =
  // 'trending/all/day?api_key=05b5b3464ea382ff0f577956284936db';  // api provided by sir
  `trending/all/week?api_key=${ApiKey}`;
export const SEARCH_URL = `search/movie?api_key=${ApiKey}&language=en-US&page=1&include_adult=false&query=sholay`;
export const MOVIEAPI = `movie/76600?api_key=${ApiKey}&language=en-US`;
export const MOVIE_UPCOMING = `movie/upcoming?api_key=${ApiKey}&language=en-US&page=1`;
export const MOVIE_LATEST = `movie/latest?api_key=${ApiKey}&language=en-US`;
