import {View, Text} from 'react-native';
import React from 'react';
import {FetchPopularMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const PopularMovie = () => {
  return (
    <MovieScreen
      FetchData={FetchPopularMovie}
      genre={StringConstants.PopularMovies}
    />
  );
};

export default PopularMovie;
