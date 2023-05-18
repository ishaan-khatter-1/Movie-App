import {View, Text} from 'react-native';
import React from 'react';
import {FetchPopularTv} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const PopularTv = () => {
  return <MovieScreen FetchData={FetchPopularTv} genre="Popular TV Shows" />;
};

export default PopularTv;
