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
import {FetchTrendingMovie} from '../../../services/FetchData';
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
    FetchTrendingMovie,
  );
  // console.log(prop.route.params);
  const apiDetail = prop.route.params;
  console.log(apiDetail.item.original_title);
  return (
    <ScrollView style={styles.mainContainer}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: BASE_IMG_URL + 'original' + apiDetail.item.backdrop_path,
        }}
        style={styles.imgStyle}
        imageStyle={styles.imageStyle}>
        <Pressable
          style={styles.pressableBack}
          onPress={() => {
            navigate('Home');
          }}>
          {/* <Text style={styles.pressableSymbol}>{'<--'}</Text> */}
          <View style={styles.pressableSymbol}>
            <BackIcon width={25} height={25} fill={'white'} />
          </View>
        </Pressable>
      </ImageBackground>
      <View style={styles.rating_titleView}>
        <View style={{width: width * 0.7}}>
          <Text style={styles.original_titleText}>
            {apiDetail.item.original_title}
          </Text>
        </View>
        <View style={styles.ratingView}>
          {/* <View style={styles.starIconView}> */}
          <StarRating width={15} height={15} />
          {/* </View> */}
          {/* <View style={styles.ratingTextView}> */}
          <Text style={styles.ratingText}>{apiDetail.item.vote_average}</Text>
          {/* </View> */}
        </View>
      </View>
      <View style={styles.ReleaseDateView}>
        <Text style={styles.releaseDateText}>Release Date</Text>
        <Text>{apiDetail.item.release_date}</Text>
      </View>
      {/* <View style={styles.overviewTextView}> */}
      <Text style={styles.overviewText}>{apiDetail.item.overview}</Text>
      {/* </View> */}
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
          data={data}
          horizontal
          renderItem={({item}) => {
            console.log(item);
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
                    <View style={styles.flatlistImgViewText}>
                      {/* <Text style={styles.flatListText}>{item.title}</Text> */}
                    </View>
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
