import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {FetchUpcomingMovie} from '../../../services/FetchData';

const Television = () => {
  const {data, isLoading, isError} = useQuery(
    'upcomingMovies',
    FetchUpcomingMovie,
  );
  console.log(data);

  // renderFunc = () => {

  // }
  return <View>{/* <FlatList data={data} renderItem={} /> */}</View>;
};

export default Television;
