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
  RECOMENDATIONS_URL_MOVIE,
  POPULAR_URL_MOVIE,
  TRENDING_URL_TV,
  POPULAR_URL_TV,
  RECOMENDATIONS_URL_TV,
} from '../index';
import {DISCOVER_TV_URL} from '../index';

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

export const FetchRecommendedMovie = async () => {
  const apiRes = await axios.get(BASE_URL + RECOMENDATIONS_URL_MOVIE);
  return apiRes.data.results;
};

export const FetchPopularMovie = async () => {
  const apiRes = await axios.get(BASE_URL + POPULAR_URL_MOVIE);
  return apiRes.data.results;
};

export const FetchMovie = async () => {
  const apiRes = await axios.get(BASE_URL + MOVIEAPI);
  return apiRes.data.results;
};

export const FetchTrendingTv = async () => {
  const apiRes = await axios.get(BASE_URL + TRENDING_URL_TV);
  return apiRes.data.results;
};

export const FetchPopularTv = async () => {
  const apiRes = await axios.get(BASE_URL + POPULAR_URL_TV);
  return apiRes.data.results;
};

export const FetchRecommendedTv = async () => {
  const apiRes = await axios.get(BASE_URL + RECOMENDATIONS_URL_TV);
  return apiRes.data.results;
};

export const FetchDiscoverTv = async () => {
  const apiRes = await axios.get(BASE_URL + DISCOVER_TV_URL);
  return apiRes.data.results;
};

//
//
//

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

//
//
//

export const FetchAllDataTv = async () => {
  const trendingRes = await axios.get(BASE_URL + TRENDING_URL_TV);
  const popularRes = await axios.get(BASE_URL + POPULAR_URL_TV);
  const recommendedRes = await axios.get(BASE_URL + RECOMENDATIONS_URL_TV);
  const discoverRes = await axios.get(BASE_URL + DISCOVER_TV_URL);

  const trendingDataTv = trendingRes.data.results.map(item => {
    return {
      id: item.id ? item.id : null,
      name: item.name ? item.name : null,
      release_date: item.release_date ? item.release_date : null,
      backdrop_path: item.backdrop_path
        ? BASE_IMG_URL + 'original' + item.backdrop_path
        : item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      title: item.title ? item.title : null,

      poster_path: item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      overview: item.overview ? item.overview : null,
    };
  });
  const popularDataTv = popularRes.data.results.map(item => {
    return {
      id: item.id ? item.id : null,
      name: item.name ? item.name : null,
      release_date: item.release_date ? item.release_date : null,
      backdrop_path: item.backdrop_path
        ? BASE_IMG_URL + 'original' + item.backdrop_path
        : item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      title: item.title ? item.title : null,

      poster_path: item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      overview: item.overview ? item.overview : null,
    };
  });
  const recommendedDataTv = recommendedRes.data.results.map(item => {
    return {
      id: item.id ? item.id : null,
      name: item.name ? item.name : null,
      release_date: item.release_date ? item.release_date : null,
      backdrop_path: item.backdrop_path
        ? BASE_IMG_URL + 'original' + item.backdrop_path
        : item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      title: item.title ? item.title : null,

      poster_path: item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      overview: item.overview ? item.overview : null,
    };
  });
  const discoverDataTv = discoverRes.data.results.map(item => {
    return {
      id: item.id ? item.id : null,
      name: item.name ? item.name : null,
      release_date: item.release_date ? item.release_date : null,
      backdrop_path: item.backdrop_path
        ? BASE_IMG_URL + 'original' + item.backdrop_path
        : item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      // title: item.title,
      title: item.title ? item.title : null,

      poster_path: item.poster_path
        ? BASE_IMG_URL + 'original' + item.poster_path
        : null,
      overview: item.overview ? item.overview : null,
    };
  });
  // console.log([
  //   ...trendingDataTv,
  //   ...popularDataTv,
  //   ...recommendedDataTv,
  //   ...discoverDataTv,
  // ]);
  return [
    ...trendingDataTv,
    ...popularDataTv,
    ...recommendedDataTv,
    ...discoverDataTv,
  ];
};

//
//
//

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2YyZTcyODYyNDA4ZTVlMzk0MmY3ZDI2ODRkYTZhOCIsInN1YiI6IjY0NGY1YmNiYzBhMzA4MDMwMTZmZjVkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8PFf9ymXKgR7H2_tlnSGmretDAnk6OU17mf4l0uILAI',
  },
};

export const FetchWatchList = async () => {
  const apiRes = await axios.get(
    BASE_URL +
      '/account/19239241/watchlist/tv?language=en-US&page=1&sort_by=created_at.asc',
    options,
  );
  return apiRes;
};
