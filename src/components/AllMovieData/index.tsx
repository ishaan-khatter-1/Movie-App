import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  BASE_IMG_URL,
  BASE_URL,
  MOVIEAPI,
  MOVIE_UPCOMING,
  SEARCH_URL,
  TRENDING_URL,
} from '../../services';
import {useQuery} from 'react-query';

const AllMovieData = () => {
  const [data, setData] = useState([]);
  const FetchAllData = async () => {
    const trendingRes = await axios.get(BASE_URL + TRENDING_URL);
    const searchRes = await axios.get(BASE_URL + SEARCH_URL);
    const MovieRes = await axios.get(BASE_URL + MOVIEAPI);
    const UpcomingRes = await axios.get(BASE_URL + MOVIE_UPCOMING);

    const trendingData = trendingRes.data.results.map(item => {
      return {
        id: item.id,
        title: item.title ? item.title : null,
        release_date: item.release_date ? item.release_date : null,
        backdropImage: item.backdrop_path
          ? BASE_IMG_URL + 'original' + item.backdrop_path
          : BASE_IMG_URL + 'original' + item.poster_path,
        posterImage: item.poster_path
          ? BASE_IMG_URL + 'original' + item.poster_path
          : null,
      };
    });
    const searchData = searchRes.data.results.map(item => {
      return {
        id: item.id,
        release_date: item.release_date ? item.release_date : null,
        backdropImage: item.backdrop_path
          ? BASE_IMG_URL + 'original' + item.backdrop_path
          : BASE_IMG_URL + 'original' + item.poster_path,
        title: item.title ? item.title : null,
        posterImage: item.poster_path
          ? BASE_IMG_URL + 'original' + item.poster_path
          : null,
      };
    });
    const upcomingData = UpcomingRes.data.results.map(item => {
      return {
        id: item.id,
        release_date: item.release_date ? item.release_date : null,
        backdropImage: item.backdrop_path
          ? BASE_IMG_URL + 'original' + item.backdrop_path
          : BASE_IMG_URL + 'original' + item.poster_path,
        // title: item.title,
        title: item.title ? item.title : null,

        posterImage: item.poster_path
          ? BASE_IMG_URL + 'original' + item.poster_path
          : null,
      };
    });
    const movieData = {
      id: MovieRes.data.id,
      release_date: MovieRes.data.release_date,
      backdropImage: MovieRes.data.backdrop_path
        ? BASE_IMG_URL + 'original' + MovieRes.data.backdrop_path
        : BASE_IMG_URL + 'original' + MovieRes.data.poster_path,
      title: MovieRes.data.title,
      posterImage: MovieRes.data.poster_path
        ? BASE_IMG_URL + 'original' + MovieRes.data.poster_path
        : null,
    };
    setData([...trendingData, ...searchData, ...upcomingData, movieData]);
  };

  useEffect(() => {
    FetchAllData();
  }, []);

  // const {(data, isLoading, isError)} = useQuery('allApiMovieData',FetchAllData)
  // const {data, isLoading, isError} = useQuery('allApiData', FetchAllData);

  const renderItem = ({item}) => (
    <View style={{margin: 10}}>
      {item.posterImage && (
        <Image
          source={{uri: item.posterImage}}
          style={{width: 150, height: 225}}
        />
      )}
      <Text style={{fontSize: 16}}>{item.title}</Text>
    </View>
  );
  console.log(data);
  return (
    <View>
      {/* <Text>AllMovieData</Text> */}
      {/* <FlatList data={data} /> */}
      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{padding: 10}}
      />
    </View>
  );
};

export default AllMovieData;
