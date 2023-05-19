import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import styles from './styles';
import ColorConstants from '../../../assets/colorConstants';
import {colorKeys} from 'moti';
import {useNavigation} from '@react-navigation/native';

interface searchText {
  title: string;
  searchType: string;
  FetchData?: () => {};
  dataKey?: string;
}

const SearchComponent = ({
  title,
  searchType,
  dataKey,
  FetchData,
}: searchText) => {
  const [search, setSearch] = useState('');
  const [press, setPress] = useState(true);
  const {navigate} = useNavigation();

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => {
        navigate('MovieTvDetail', {item});
      }}>
      <View style={{margin: 10}}>
        {item.poster_path && (
          <Image style={styles.imageStyle} source={{uri: item.poster_path}} />
        )}
      </View>
    </Pressable>
  );

  const {data, isLoading, isError} = useQuery(dataKey, {queryFn: FetchData});

  const filteredData = data?.filter(item => {
    return (
      (item.title && item.title?.toLowerCase().match(search.toLowerCase())) ||
      (item.name && item.name?.toLowerCase().match(search.toLowerCase()))
    );
  });

  return (
    <View
      style={{paddingTop: 10, backgroundColor: ColorConstants.backgroundWhite}}>
      {press ? <Text style={styles.headerText}>{title}</Text> : null}

      <TextInput
        onFocus={() => {
          setPress(false);
        }}
        onBlur={() => {
          setPress(true);
        }}
        placeholder={searchType}
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={val => setSearch(val)}
        style={styles.search}
      />
      <FlatList
        data={filteredData}
        style={styles.flatListstyle}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default SearchComponent;
