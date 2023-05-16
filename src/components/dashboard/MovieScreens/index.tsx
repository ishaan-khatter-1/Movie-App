import React from 'react';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

import {
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {useQuery} from 'react-query';
import styles from './styles';
import {BASE_IMG_URL} from '../../../services';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-snap-carousel';
import UpgradePlanSlider from '../../Slider';
import {
  FetchLatestMovie,
  FetchTrendingMovie,
} from '../../../services/FetchData';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;

interface MovieComponent {
  FetchData?: () => {};
  genre?: string;
}

const MovieScreen = ({FetchData, genre}: MovieComponent) => {
  const {navigate} = useNavigation();
  const height = width * 1.5;

  const renderFuncZero = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() => {
            navigate('MovieDetail', {item});
          }}>
          <ImageBackground
            resizeMode="contain"
            style={styles.imgOneStyleZero}
            imageStyle={styles.imageStyleZero}
            source={{uri: BASE_IMG_URL + 'w500' + item.backdrop_path}}>
            <Text>{item.title}</Text>
          </ImageBackground>
        </Pressable>
      </View>
    );
  };

  const renderFunc = ({item}) => {
    return (
      <View style={styles.renderView}>
        <TouchableOpacity
          onPress={() => {
            navigate('MovieDetail', {item});
          }}
          // onPress={renderDetail}
        >
          <ImageBackground
            style={styles.imgOneStyle}
            imageStyle={styles.imageStyle}
            source={{uri: BASE_IMG_URL + 'w500' + item.poster_path}}>
            <Text>{item.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  const {data, isLoading, isError} = useQuery('TrendingMovies', {
    queryFn: FetchData,
  });
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>{isError.message}</Text>;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.carouselViewZero}>
        <Carousel
          style={styles.carousel}
          data={data}
          renderItem={renderFuncZero}
          loop
          autoplay={true}
          autoplayInterval={3000}
          sliderWidth={width * 0.95}
          itemWidth={width * 0.9}
        />
      </View>
      <Text style={styles.trendingTextColor}>{genre}</Text>

      <View style={styles.carouselView}>
        <Carousel
          style={styles.carousel}
          data={data}
          renderItem={renderFunc}
          loop
          sliderWidth={width}
          itemWidth={width * 0.75}
          itemHeight={height}
        />
      </View>
    </View>
  );
};

export default MovieScreen;
