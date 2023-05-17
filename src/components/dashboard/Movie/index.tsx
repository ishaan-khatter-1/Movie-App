import {View, Text, TextInput} from 'react-native';
import React from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';
import SearchMovie from './SearchMovie';
import SearchComponent from '../SearchComponent';
import {FetchAllData, FetchAllDataTv} from '../../../services/FetchData';

const Movie = () => {
  // console.log(FetchAllData());
  return (
    <View style={styles.mainContainer}>
      <SearchComponent
        title="Find Movies and related details...."
        // FetchData={FetchAllData}
        searchType="Find Movies"
        dataKey="Movie Searching"
      />
    </View>
  );
};

export default Movie;
