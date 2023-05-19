import {View, Text} from 'react-native';
import React from 'react';
import {FetchSearchMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const HotMovie = () => {
  return (
    <MovieScreen FetchData={FetchSearchMovie} genre={StringConstants.Hot} />
  );
};

export default HotMovie;
