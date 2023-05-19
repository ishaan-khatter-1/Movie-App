import {View, Text} from 'react-native';
import React from 'react';
import {FetchDiscoverTv} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const DiscoverTv = () => {
  return (
    <MovieScreen
      FetchData={FetchDiscoverTv}
      genre={StringConstants.DiscoverTv}
    />
  );
};

export default DiscoverTv;
