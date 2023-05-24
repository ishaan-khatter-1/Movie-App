import {View, Text, TextInput} from 'react-native';
import React from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';
import SearchMovie from './SearchMovie';
import SearchComponent from '../../SearchComponent';
import {FetchAllData, FetchAllDataTv} from '../../../../services/FetchData';
import {useQuery} from 'react-query';
import StringConstants from '../../../../assets/stringConstants';

const Movie = () => {
  const {data} = useQuery('hil', FetchAllData);
  console.log(data);
  return (
    <SearchComponent
      title={StringConstants.SearchMovieTitle}
      // FetchData={FetchAllData}
      searchType={StringConstants.FindMoviesPlaceholder}
      FetchData={FetchAllData}
      dataKey="Movie Searching"
    />
  );
};

export default Movie;
