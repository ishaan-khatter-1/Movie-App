import {View, Text} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {FetchWatchList} from '../services/FetchData';

const Practive = () => {
  const {data, isLoading, isError} = useQuery('TvList', FetchWatchList);
  console.log(data);
  return (
    <View>
      <Text>Practive</Text>
    </View>
  );
};

export default Practive;
