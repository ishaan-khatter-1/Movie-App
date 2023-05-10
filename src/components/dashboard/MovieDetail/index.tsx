import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {FetchTrendingMovie} from '../../../services/FetchData';
import {ImageBackground} from 'react-native';
import {BASE_IMG_URL} from '../../../services';
import styles from './styles';
import StarRating from '../../../assets/svgIcons/starRating';

const MovieDetal = prop => {
  const {data, isLoading, isError} = useQuery(
    'movieDetail',
    FetchTrendingMovie,
  );
  // console.log(prop.route.params);
  const apiDetail = prop.route.params;
  console.log(apiDetail.item.original_title);
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        resizeMode="cover"
        source={{
          uri: BASE_IMG_URL + 'original' + apiDetail.item.backdrop_path,
        }}
        style={styles.imgStyle}
        imageStyle={styles.imageStyle}></ImageBackground>
      <View style={styles.rating_titleView}>
        <Text style={styles.original_titleText}>
          {apiDetail.item.original_title}
        </Text>
        <View style={styles.ratingView}>
          <View style={styles.starIconView}>
            <StarRating width={20} height={20} />
          </View>
          <View style={styles.ratingTextView}>
            <Text style={styles.ratingText}>{apiDetail.item.vote_average}</Text>
          </View>
        </View>
      </View>
      <View style={styles.ReleaseDateView}>
        <Text style={styles.releaseDateText}>Release Date</Text>
        <Text>{apiDetail.item.release_date}</Text>
      </View>
      <View style={styles.overviewTextView}>
        <Text style={styles.overviewText}>{apiDetail.item.overview}</Text>
      </View>
      <View>
        <Text style={styles.moreHeadTxt}>More</Text>
        <FlatList
          data={data}
          horizontal
          renderItem={({item}) => {
            console.log(item);
            return (
              <View>
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
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default MovieDetal;
