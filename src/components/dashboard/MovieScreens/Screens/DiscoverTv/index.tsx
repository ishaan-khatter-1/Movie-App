import {View, Text} from 'react-native';
import React from 'react';
import {FetchDiscoverTv} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const DiscoverTv = () => {
  return <MovieScreen FetchData={FetchDiscoverTv} genre="Discover Shows" />;
};

export default DiscoverTv;
