import {View, Text, TextInput, FlatList, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';
import SearchMovie from './SearchMovie';
import SearchComponent from '../../SearchComponent';
import {FetchAllData, FetchAllDataTv} from '../../../../services/FetchData';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';
import StringConstants from '../../../../assets/stringConstants';

const Television = () => {
  return (
    <SearchComponent
      title={StringConstants.SearchTvTitle}
      searchType={StringConstants.FindTVShowsPlaceholder}
      FetchData={FetchAllDataTv}
      dataKey="Tv Searching"
    />
  );
};

export default Television;
