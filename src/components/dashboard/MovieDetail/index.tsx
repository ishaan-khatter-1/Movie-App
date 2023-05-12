import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {
  FetchAllData,
  FetchTrendingMovie,
  FetchUpcomingMovie,
} from '../../../services/FetchData';
import {ImageBackground} from 'react-native';
import {BASE_IMG_URL} from '../../../services';
import styles from './styles';
import StarRating from '../../../assets/svgIcons/starRating';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../assets/svgIcons/BackIcon';

const MovieDetal = prop => {
  const {navigate} = useNavigation();
  const width = Dimensions.get('window').width;
  const {data, isLoading, isError} = useQuery(
    'movieDetail',
    FetchUpcomingMovie,
  );
  // console.log(prop.route.params);
  const apiDetail = prop.route.params;
  // console.log(apiDetail.item.original_title);
  // console.log(prop);
  return (
    <ScrollView style={styles.mainContainer}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: BASE_IMG_URL + 'original' + apiDetail.item.backdrop_path,
          // uri: BASE_IMG_URL + 'original' + apiDetail.item.backdropImage,
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
          {apiDetail.item.original_title}
        </Text>
      </View>
      <View style={styles.ReleaseDateView}>
        <Text style={styles.releaseDateText}>Release Date</Text>
        <StarRating width={17} height={17} fill={'yellow'} />
        <Text style={styles.ratingText}>{apiDetail.item.vote_average}</Text>
      </View>
      <Text style={{marginLeft: 15}}>{apiDetail.item.release_date}</Text>
      <Text style={styles.overviewText}>{apiDetail.item.overview}</Text>
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
          // keyExtractor={}
          data={data}
          horizontal
          renderItem={({item}) => {
            return (
              <View>
                <Pressable
                  onPress={() => {
                    navigate('MovieDetail', {item});
                  }}>
                  <ImageBackground
                    resizeMode="contain"
                    source={{
                      uri: BASE_IMG_URL + 'original' + item.poster_path,
                    }}
                    imageStyle={{
                      borderRadius: 20,
                    }}
                    style={styles.flatlistImgText}>
                    <View style={styles.flatlistImgViewText}></View>
                  </ImageBackground>
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
