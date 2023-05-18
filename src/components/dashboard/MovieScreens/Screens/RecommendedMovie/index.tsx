import {View, Text} from 'react-native';
import React from 'react';
import {FetchRecommendedMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const RecommendedMovie = () => {
  return (
    <MovieScreen
      FetchData={FetchRecommendedMovie}
      genre="Recommended for you."
    />
  );
};

export default RecommendedMovie;
