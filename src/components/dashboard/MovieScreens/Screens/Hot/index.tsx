import {View, Text} from 'react-native';
import React from 'react';
import {FetchSearchMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const HotMovie = () => {
  return <MovieScreen FetchData={FetchSearchMovie} genre="All Hots" />;
};

export default HotMovie;
