import {View, Text} from 'react-native';
import React from 'react';
import {FetchPopularTv} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const PopularTv = () => {
  return (
    <MovieScreen FetchData={FetchPopularTv} genre={StringConstants.PopularTv} />
  );
};

export default PopularTv;
