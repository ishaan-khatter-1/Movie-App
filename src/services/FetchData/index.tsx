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
