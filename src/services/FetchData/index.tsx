// import {View, Text} from 'react-native';
// import React, {useEffect} from 'react';
// import axios from 'axios';
// import {
//   BASE_URL,
//   SEARCH_URL,
//   MOVIE_UPCOMING,
//   TRENDING_URL,
//   MOVIE_LATEST,
//   MOVIEAPI,
// } from '../index';

// export const FetchSearchMovie = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const apiRes = await axios.get(BASE_URL + SEARCH_URL);
//       return apiRes.data.results;
//     };
//     fetchData();
//   }, []);
// };

// export const FetchLatestMovie = async () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const apiRes = await axios.get(BASE_URL + MOVIE_LATEST);
//       return apiRes.data.results;
//     };
//     fetchData();
//   }, []);
// };

// export const FetchTrendingMovie = async () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const apiRes = await axios.get(BASE_URL + TRENDING_URL);
//       return apiRes.data.results;
//     };
//     fetchData();
//   }, []);
// };

// export const FetchUpcomingMovie = async () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const apiRes = await axios.get(BASE_URL + MOVIE_UPCOMING);
//       return apiRes.data.results;
//     };
//     fetchData();
//   }, []);
// };

// export const FetchMovie = async () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       const apiRes = await axios.get(BASE_URL + MOVIEAPI);
//       return apiRes.data.results;
//     };
//     fetchData();
//   }, []);
// };

import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';
import {
  BASE_URL,
  SEARCH_URL,
  MOVIE_UPCOMING,
  TRENDING_URL,
  MOVIE_LATEST,
  MOVIEAPI,
  BASE_IMG_URL,
} from '../index';

export const FetchSearchMovie = async () => {
  const apiRes = await axios.get(BASE_URL + SEARCH_URL);
  return apiRes.data.results;
};

export const FetchLatestMovie = async () => {
  const apiRes = await axios.get(BASE_URL + MOVIE_LATEST);
  return apiRes.data.results;
};

export const FetchTrendingMovie = async () => {
  const apiRes = await axios.get(BASE_URL + TRENDING_URL);
  return apiRes.data.results;
};

export const FetchUpcomingMovie = async () => {
  const apiRes = await axios.get(BASE_URL + MOVIE_UPCOMING);
  return apiRes.data.results;
};

export const FetchMovie = async () => {
  const apiRes = await axios.get(BASE_URL + MOVIEAPI);
  return apiRes.data.results;
};

export const FetchAllData = async () => {
  const trendingRes = await axios.get(BASE_URL + TRENDING_URL);
  const searchRes = await axios.get(BASE_URL + SEARCH_URL);
  const MovieRes = await axios.get(BASE_URL + MOVIEAPI);
  const UpcomingRes = await axios.get(BASE_URL + MOVIE_UPCOMING);

  const trendingData = trendingRes.data.results.map(item => {
    return {
      id: item.id,
      title: item.title ? item.title : null,
      release_date: item.release_date ? item.release_date : null,
      backdrop_path: item.backdrop_path
        ? BASE_IMG_URL + 'original' + item.backdrop_path
        : BASE_IMG_URL + 'original' + item.poster_path,
      poster_path: item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      overview: item.overview ? item.overview : null,
    };
  });
  const searchData = searchRes.data.results.map(item => {
    return {
      id: item.id,
      release_date: item.release_date ? item.release_date : null,
      backdrop_path: item.backdrop_path
        ? BASE_IMG_URL + 'original' + item.backdrop_path
        : BASE_IMG_URL + 'original' + item.poster_path,
      title: item.title ? item.title : null,
      poster_path: item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      overview: item.overview ? item.overview : null,
    };
  });
  const upcomingData = UpcomingRes.data.results.map(item => {
    return {
      id: item.id,
      release_date: item.release_date ? item.release_date : null,
      backdrop_path: item.backdrop_path
        ? BASE_IMG_URL + 'original' + item.backdrop_path
        : BASE_IMG_URL + 'original' + item.poster_path,
      // title: item.title,
      title: item.title ? item.title : null,

      poster_path: item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      overview: item.overview ? item.overview : null,
    };
  });
  const movieData = {
    id: MovieRes.data.id,
    release_date: MovieRes.data.release_date,
    backdrop_path: MovieRes.data.backdrop_path
      ? BASE_IMG_URL + 'original' + MovieRes.data.backdrop_path
      : BASE_IMG_URL + 'original' + MovieRes.data.poster_path,
    title: MovieRes.data.title,
    poster_path: MovieRes.data.poster_path
      ? BASE_IMG_URL + 'original' + MovieRes.data.poster_path
      : null,
    overview: MovieRes.data.overview,
  };
  return [...trendingData, ...searchData, ...upcomingData, movieData];
};
