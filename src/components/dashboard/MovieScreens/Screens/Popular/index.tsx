import {View, Text} from 'react-native';
import React from 'react';
import {FetchPopularMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const PopularMovie = () => {
  return (
    <MovieScreen FetchData={FetchPopularMovie} genre="All Popular Movies" />
  );
};

export default PopularMovie;
