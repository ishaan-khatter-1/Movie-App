import React from 'react';

import {
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from 'react-query';
import BackIcon from '../../../assets/svgIcons/BackIcon';

import styles from './styles';
import {BASE_IMG_URL} from '../../../services';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-snap-carousel';

import {useNavigation} from '@react-navigation/native';
import ColorConstants from '../../../assets/colorConstants';
import StringConstants from '../../../assets/stringConstants';
import PlainHeader from '../../PlainHeader';

const width = Dimensions.get('window').width;

interface MovieComponent {
  FetchData?: () => {};
  genre?: string;
}

const MovieScreen = ({FetchData, genre}: MovieComponent, prop: any) => {
  const {navigate, goBack} = useNavigation();

  const renderFuncCarousel = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() => {
            navigate('MovieTvDetail', {item});
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
            navigate('MovieTvDetail', {item});
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

  const {data, isLoading, isError} = useQuery('SeeAllData', {
    queryFn: FetchData,
  });
  if (isLoading) {
    return <ActivityIndicator size={'large'} />;
  }

  if (isError) {
    return <Text>{isError.message}</Text>;
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <PlainHeader />
      <View style={styles.carouselView}>
        <Carousel
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
