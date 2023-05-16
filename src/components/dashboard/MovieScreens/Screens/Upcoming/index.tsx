import {View, Text} from 'react-native';
import React from 'react';
import {FetchUpcomingMovie} from '../../../../../services/FetchData';
import MovieScreen from '../..';

const UpcomingMovie = () => {
  return <MovieScreen FetchData={FetchUpcomingMovie} genre="All Upcoming" />;
};

export default UpcomingMovie;
