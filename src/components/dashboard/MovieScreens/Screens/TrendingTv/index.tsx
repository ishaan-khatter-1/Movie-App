import {View, Text} from 'react-native';
import React from 'react';
import {FetchTrendingTv} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const TrendingTv = () => {
  return <MovieScreen FetchData={FetchTrendingTv} genre="Trending TV Shows" />;
};

export default TrendingTv;
