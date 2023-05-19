import {View, Text} from 'react-native';
import React from 'react';
import {FetchTrendingMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const TrendingMovie = () => {
  return (
    <MovieScreen
      FetchData={FetchTrendingMovie}
      genre={StringConstants.TrendingMovies}
    />
  );
};

export default TrendingMovie;
