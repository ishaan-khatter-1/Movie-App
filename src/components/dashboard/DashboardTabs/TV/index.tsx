import {View, Text, TextInput, FlatList, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';
import SearchMovie from './SearchMovie';
import SearchComponent from '../../SearchComponent';
import {FetchAllData, FetchAllDataTv} from '../../../../services/FetchData';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';

const Television = () => {
  return (
    <View>
      <View style={styles.SearchComponentStyle}>
        <SearchComponent
          title="Find TV Shows and Related Details"
          searchType={'Search TV Shows'}
          FetchData={FetchAllDataTv}
          dataKey="Tv Searching"
        />
      </View>
    </View>
  );
};

export default Television;
