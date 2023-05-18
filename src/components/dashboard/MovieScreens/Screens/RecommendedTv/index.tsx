import {View, Text} from 'react-native';
import React from 'react';
import {FetchRecommendedTv} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const RecommendedTv = () => {
  return (
    <MovieScreen
      FetchData={FetchRecommendedTv}
      genre="Recommended TV Shows for you"
    />
  );
};

export default RecommendedTv;
