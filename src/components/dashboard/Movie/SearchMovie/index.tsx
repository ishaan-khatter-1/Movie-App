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
import {
  BASE_IMG_URL,
  BASE_URL,
  MOVIEAPI,
  MOVIE_UPCOMING,
  SEARCH_URL,
  TRENDING_URL,
} from '../../../../services';
import {useQuery} from 'react-query';
import styles from './styles';
import ColorConstants from '../../../../assets/colorConstants';
import {colorKeys} from 'moti';
import {useNavigation} from '@react-navigation/native';
import {FetchAllData} from '../../../../services/FetchData';

const SearchMovie = () => {
  const [search, setSearch] = useState('');
  const [press, setPress] = useState(true);
  const {navigate} = useNavigation();

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => {
        navigate('MovieDetail', {item});
      }}>
      <View style={{margin: 10}}>
        {item.poster_path && (
          <Image style={styles.imageStyle} source={{uri: item.poster_path}} />
        )}
      </View>
    </Pressable>
  );

  const {data, isLoading, isError} = useQuery('AllData', FetchAllData);
  // console.log(data);
  const filteredData = data?.filter(item => {
    return item.title?.toLowerCase().match(search.toLowerCase());
  });

  return (
    <View style={{paddingTop: 10}}>
      {press ? (
        <Text style={styles.headerText}>
          Find movies, TV series and more....
        </Text>
      ) : null}
      <TextInput
        onFocus={() => {
          setPress(false);
        }}
        onBlur={() => {
          setPress(true);
        }}
        placeholder="Search"
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

export default SearchMovie;
