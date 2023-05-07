import {View, Text, ImageBackground, Dimensions} from 'react-native';
import React from 'react';
import axios from 'axios';
import {
  BASE_IMG_URL,
  BASE_URL,
  MOVIEAPI,
  SEARCH_URL,
} from '../../../../services';
import {useQuery} from 'react-query';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import {FetchSearchMovie} from '../../../../services/FetchData';

// const fetchMovie = async () => {
//   const apiRes = await axios.get(BASE_URL + SEARCH_URL);
//   return apiRes.data.results;
// };

const ApiMovie = () => {
  const width = Dimensions.get('window').width;

  const height = width * 1.5;
  const renderFunc = ({item}) => {
    return (
      <View>
        <ImageBackground
          imageStyle={styles.imageStyle}
          style={styles.imgOneStyle}
          source={{uri: BASE_IMG_URL + 'w500' + item.poster_path}}>
          <Text>{item.id}</Text>
        </ImageBackground>
      </View>
    );
  };
  const {data, isLoading, isError} = useQuery(
    'moviesSearchAPI',
    FetchSearchMovie,
  );
  if (isLoading) {
    return <Text>loading..</Text>;
  }
  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.mainContainer}>
      <Carousel
        data={data}
        renderItem={renderFunc}
        itemHeight={height}
        itemWidth={width * 0.5}
        sliderWidth={width * 0.8}
      />
    </View>
  );
};

export default ApiMovie;
