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
  ScrollView,
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

  const renderFuncCarousel = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() => {
            navigate('MovieDetail', {item});
          }}>
          {item.poster_path && (
            <View>
              <ImageBackground
                resizeMode="contain"
                style={styles.imgCarouselStyle}
                imageStyle={styles.imageStyle}
                source={{
                  uri: item.backdrop_path
                    ? BASE_IMG_URL + 'w500' + item.backdrop_path
                    : BASE_IMG_URL + 'w500' + item.poster_path,
                }}></ImageBackground>
            </View>
          )}
        </Pressable>
      </View>
    );
  };

  const renderFuncFlatlist = ({item}) => {
    return (
      <View
      // style={styles.renderView}
      >
        <TouchableOpacity
          onPress={() => {
            navigate('MovieDetail', {item});
          }}
          // onPress={renderDetail}
        >
          {item.poster_path && (
            <ImageBackground
              resizeMode="contain"
              style={styles.imgFlatlistStyle}
              imageStyle={styles.imageStyle}
              source={{
                uri: BASE_IMG_URL + 'w500' + item.poster_path,
              }}></ImageBackground>
          )}
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
    <ScrollView style={styles.mainContainer}>
      <View
      // style={styles.carouselViewZero}
      >
        <Carousel
          // style={styles.carousel}
          data={data}
          renderItem={renderFuncCarousel}
          loop
          autoplay={true}
          autoplayInterval={3000}
          sliderWidth={width}
          itemWidth={width * 0.8}
        />
      </View>
      <Text style={styles.typeTextColor}>{genre}</Text>

      <View style={styles.FlatlistView}>
        <FlatList data={data} renderItem={renderFuncFlatlist} numColumns={2} />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
