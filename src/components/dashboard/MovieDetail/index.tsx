import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {
  FetchAllData,
  FetchAllDataTv,
  FetchTrendingMovie,
  FetchUpcomingMovie,
  MovieTvData,
} from '../../../services/FetchData';
import {ImageBackground} from 'react-native';
import {BASE_IMG_URL} from '../../../services';
import styles from './styles';
import StarRating from '../../../assets/svgIcons/starRating';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../assets/svgIcons/BackIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetal = prop => {
  const {navigate} = useNavigation();
  const width = Dimensions.get('window').width;
  const {data, isLoading, isError} = useQuery('MovieTVData', MovieTvData);

  // MovieTvData();
  // console.log(prop.route.params);
  const apiDetail = prop.route.params;
  // console.log(apiDetail.item.original_title);

  // console.log(prop.route.params.item);
  const FavMovieTvDetail = prop.route.params.item;
  // console.log(apiDetail.item.backdrop_path);

  // const getFav = async () => {
  //   console.log('item get');
  // };
  // const storeFav = async () => {
  //   const favItem = await AsyncStorage.getItem('FavDetail');
  //   const arrayOne = [FavMovieTvDetail, favItem];
  //   // console.log(arrayOne);
  //   await AsyncStorage.setItem('FavDetail', JSON.stringify(arrayOne));
  //   const existingData = arrayOne ? JSON.parse(favItem) : [];
  //   console.log(existingData);
  // };

  // const storeFav = async () => {
  //   const favItem = await AsyncStorage.getItem('FavDetail');
  //   const arrayOne = [FavMovieTvDetail, ...favItem];
  //   await AsyncStorage.setItem('FavDetail', JSON.stringify(arrayOne));
  //   const existingData = favItem ? JSON.parse(favItem) : [];
  //   console.log(existingData);
  // };

  // const storeFav = async () => {
  //   const favItem = await AsyncStorage.getItem('FavDetail');
  //   let existingData = [];
  //   if (favItem) {
  //     try {
  //       existingData = JSON.parse(favItem);
  //     } catch (error) {
  //       console.log('Error parsing existing data:', error);
  //     }
  //   }
  //   const arrayOne = [FavMovieTvDetail, ...existingData];
  //   await AsyncStorage.setItem('FavDetail', JSON.stringify(arrayOne));
  //   console.log(existingData);
  // };

  // // storeFav();

  // // const getFav = async () => {};
  // const clearFav = async () => {
  //   await AsyncStorage.removeItem('FavDetail');
  //   console.log('FavDetail cleared');
  // };
  return (
    <ScrollView style={styles.mainContainer}>
      <ImageBackground
        resizeMode="stretch"
        source={{
          uri: apiDetail.item.backdrop_path
            ? BASE_IMG_URL + 'original' + apiDetail.item.backdrop_path
            : BASE_IMG_URL + 'original' + apiDetail.item.poster_path,
        }}
        style={styles.imgStyle}
        imageStyle={styles.imageStyle}>
        <Pressable
          style={styles.pressableBack}
          onPress={() => {
            navigate('Home');
          }}>
          <View style={styles.pressableSymbol}>
            <BackIcon width={25} height={25} fill={'white'} />
          </View>
        </Pressable>
      </ImageBackground>
      <View style={styles.rating_titleView}>
        <Text style={styles.original_titleText}>
          {apiDetail.item.title ? apiDetail.item.title : apiDetail.item.name}
        </Text>
      </View>
      <View style={styles.ReleaseDateView}>
        <Text style={styles.releaseDateText}>Release Date</Text>
        <StarRating width={17} height={17} fill={'yellow'} />
        <Text style={styles.ratingText}>{apiDetail.item.vote_average}</Text>
      </View>
      <Text style={{marginLeft: 15}}>{apiDetail.item.release_date}</Text>
      <Text style={styles.overviewText}>{apiDetail.item.overview}</Text>
      {/* <TouchableOpacity onPress={storeFav}>
        <Text>Add to Favourite</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={clearFav}>
        <Text>clear Favourite</Text>
      </TouchableOpacity> */}
      <View
        style={
          {
            // backgroundColor: 'red',
            // // width: width * 0.95,
            // alignSelf: 'center',
          }
        }>
        <Text style={styles.moreHeadTxt}>More</Text>
        <FlatList
          keyExtractor={item => item.poster_path}
          data={data}
          // horizontal
          renderItem={({item}) => {
            return (
              <View>
                <Pressable
                  onPress={() => {
                    navigate('MovieDetail', {item});
                  }}>
                  <View style={styles.flatlistImgTextView}>
                    {item.poster_path && (
                      <ImageBackground
                        resizeMode="contain"
                        source={{
                          uri: BASE_IMG_URL + 'original' + item.poster_path,
                        }}
                        imageStyle={{
                          borderRadius: 5,
                        }}
                        style={styles.flatlistImgText}>
                        {/* <View style={styles.flatlistImgViewText} /> */}
                      </ImageBackground>
                    )}
                    <View style={{flex: 1, height: 180, marginRight: 10}}>
                      <Text style={styles.flatListTitleText}>
                        {item.title ? item.title : item.name}
                      </Text>
                      <Text>{item.overview}</Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default MovieDetal;
