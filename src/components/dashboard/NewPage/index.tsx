import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import axios from 'axios';
import {
  BASE_IMG_URL,
  BASE_URL,
  TRENDING_URL,
  TRENDING_URL_TV,
} from '../../../services';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const NewPage = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const FetchCarouselData = async () => {
    const trendingMovie = await axios.get(BASE_URL + TRENDING_URL);
    const trendingTv = await axios.get(BASE_URL + TRENDING_URL_TV);

    const MovieData = trendingMovie.data.results.slice(0, 2).map(item => {
      return {
        // ...GiveData,
        id: item.id,
        release_date: item.release_date ? item.release_date : null,
        backdrop_path: item.backdrop_path
          ? BASE_IMG_URL + 'original' + item.backdrop_path
          : BASE_IMG_URL + 'original' + item.poster_path,
        // title: item.title,
        title: item.title ? item.title : null,

        poster_path: item.poster_path
          ? BASE_IMG_URL + 'original' + item.poster_path
          : null,
        overview: item.overview ? item.overview : null,
      };
    });
    const TvData = trendingTv.data.results.slice(0, 2).map(item => {
      return {
        id: item.id,
        release_date: item.release_date ? item.release_date : null,
        backdrop_path: item.backdrop_path
          ? BASE_IMG_URL + 'original' + item.backdrop_path
          : BASE_IMG_URL + 'original' + item.poster_path,
        // title: item.title,
        title: item.title ? item.title : null,

        poster_path: item.poster_path
          ? BASE_IMG_URL + 'original' + item.poster_path
          : null,
        overview: item.overview ? item.overview : null,
      };
    });
    setData([...MovieData, ...TvData]);
  };

  useEffect(() => {
    FetchCarouselData();
  }, []);
  console.log(data);
  const {navigate} = useNavigation();
  const renderFunc = ({item}) => {
    return (
      <Pressable
        style={{margin: 0}}
        onPress={() => {
          navigate('MovieDetail', {item});
        }}>
        <View style={{margin: 0}}>
          {item.backdrop_path && (
            <ImageBackground
              resizeMode="cover"
              style={styles.imgStyle}
              source={{uri: item.backdrop_path}}
            />
          )}
        </View>
      </Pressable>
    );
  };
  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderFunc}
        loop
        ref={isCarousel}
        autoplay={true}
        autoplayInterval={3000}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default NewPage;
