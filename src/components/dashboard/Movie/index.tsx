import {View, Text, TextInput} from 'react-native';
import React from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';
import SearchMovie from './SearchMovie';
import SearchComponent from '../SearchComponent';
import {FetchAllData, FetchAllDataTv} from '../../../services/FetchData';
import {useQuery} from 'react-query';

const Movie = () => {
  const {data} = useQuery('hil', FetchAllData);
  console.log(data);
  return (
    <View style={styles.mainContainer}>
      <SearchComponent
        title="Find Movies and related details...."
        // FetchData={FetchAllData}
        searchType="Find Movies"
        FetchData={FetchAllData}
        dataKey="Movie Searching"
      />
    </View>
  );
};

export default Movie;
