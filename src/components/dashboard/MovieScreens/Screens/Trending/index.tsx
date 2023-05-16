import {View, Text} from 'react-native';
import React from 'react';
import {FetchTrendingMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const TrendingMovie = () => {
  return (
    <MovieScreen FetchData={FetchTrendingMovie} genre="Trending in Movies" />
  );
};

export default TrendingMovie;
