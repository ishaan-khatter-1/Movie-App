import {View, Text} from 'react-native';
import React from 'react';
import {FetchTrendingTv} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const TrendingTv = () => {
  return (
    <MovieScreen
      FetchData={FetchTrendingTv}
      genre={StringConstants.TrendingTv}
    />
  );
};

export default TrendingTv;
