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
  // const [data, setData] = useState([]);
  // const FetchAllData = async () => {
  //   const trendingRes = await axios.get(BASE_URL + TRENDING_URL);
  //   const searchRes = await axios.get(BASE_URL + SEARCH_URL);
  //   const MovieRes = await axios.get(BASE_URL + MOVIEAPI);
  //   const UpcomingRes = await axios.get(BASE_URL + MOVIE_UPCOMING);

  //   const trendingData = trendingRes.data.results.map(item => {
  //     return {
  //       id: item.id,
  //       title: item.title ? item.title : null,
  //       release_date: item.release_date ? item.release_date : null,
  //       backdrop_path: item.backdrop_path
  //         ? BASE_IMG_URL + 'original' + item.backdrop_path
  //         : BASE_IMG_URL + 'original' + item.poster_path,
  //       poster_path: item.poster_path
  //         ? BASE_IMG_URL + 'original' + item.poster_path
  //         : null,
  //       overview: item.overview ? item.overview : null,
  //     };
  //   });
  //   const searchData = searchRes.data.results.map(item => {
  //     return {
  //       id: item.id,
  //       release_date: item.release_date ? item.release_date : null,
  //       backdrop_path: item.backdrop_path
  //         ? BASE_IMG_URL + 'original' + item.backdrop_path
  //         : BASE_IMG_URL + 'original' + item.poster_path,
  //       title: item.title ? item.title : null,
  //       poster_path: item.poster_path
  //         ? BASE_IMG_URL + 'original' + item.poster_path
  //         : null,
  //       overview: item.overview ? item.overview : null,
  //     };
  //   });
  //   const upcomingData = UpcomingRes.data.results.map(item => {
  //     return {
  //       id: item.id,
  //       release_date: item.release_date ? item.release_date : null,
  //       backdrop_path: item.backdrop_path
  //         ? BASE_IMG_URL + 'original' + item.backdrop_path
  //         : BASE_IMG_URL + 'original' + item.poster_path,
  //       // title: item.title,
  //       title: item.title ? item.title : null,

  //       poster_path: item.poster_path
  //         ? BASE_IMG_URL + 'original' + item.poster_path
  //         : null,
  //       overview: item.overview ? item.overview : null,
  //     };
  //   });
  //   const movieData = {
  //     id: MovieRes.data.id,
  //     release_date: MovieRes.data.release_date,
  //     backdrop_path: MovieRes.data.backdrop_path
  //       ? BASE_IMG_URL + 'original' + MovieRes.data.backdrop_path
  //       : BASE_IMG_URL + 'original' + MovieRes.data.poster_path,
  //     title: MovieRes.data.title,
  //     poster_path: MovieRes.data.poster_path
  //       ? BASE_IMG_URL + 'original' + MovieRes.data.poster_path
  //       : null,
  //     overview: MovieRes.data.overview,
  //   };
  //   setData([...trendingData, ...searchData, ...upcomingData, movieData]);
  // };

  // useEffect(() => {
  //   FetchAllData();
  // }, []);

  // const {(data, isLoading, isError)} = useQuery('allApiMovieData',FetchAllData)
  // const {data, isLoading, isError} = useQuery('allApiData', FetchAllData);
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

  // const onSearchPress = () =>{
  // }
  return (
    <View style={{paddingTop: 10}}>
      {press ? (
        <Text style={styles.headerText}>
          Find movies, TV series and more....
        </Text>
      ) : null}
      {/* <Text style={styles.headerText}>Find movies, TV series and more....</Text> */}
      <TextInput
        onFocus={() => {
          setPress(false);
        }}
        onBlur={() => {
          setPress(true);
        }}
        placeholder="Search"
        clearButtonMode="always"
        // placeholderTextColor={ColorConstants.textWhite}
        // clearButtonVisible={true}
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
        // contentContainerStyle={{padding: 10}}
      />
    </View>
  );
};

export default SearchMovie;
