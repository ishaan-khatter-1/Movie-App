import {View, Text} from 'react-native';
import React from 'react';
import {FetchRecommendedMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const RecommendedMovie = () => {
  return (
    <MovieScreen
      FetchData={FetchRecommendedMovie}
      genre={StringConstants.RecommededMovies}
    />
  );
};

export default RecommendedMovie;
