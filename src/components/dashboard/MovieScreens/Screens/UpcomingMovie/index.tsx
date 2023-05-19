import {View, Text} from 'react-native';
import React from 'react';
import {FetchUpcomingMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';
import StringConstants from '../../../../../assets/stringConstants';

const UpcomingMovie = () => {
  return (
    <MovieScreen
      FetchData={FetchUpcomingMovie}
      genre={StringConstants.UpcomingMovies}
    />
  );
};

export default UpcomingMovie;
