import {View, Text} from 'react-native';
import React from 'react';
import {FetchRecommendedTv} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const RecommendedTv = () => {
  return (
    <MovieScreen
      FetchData={FetchRecommendedTv}
      genre={StringConstants.RecommendedTv}
    />
  );
};

export default RecommendedTv;
