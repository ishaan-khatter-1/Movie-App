import {View, Text} from 'moti';
import {Dimensions, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useQuery} from 'react-query';
import {BASE_IMG_URL} from '../../../../services';
import {
  FetchLatestMovie,
  FetchUpcomingMovie,
} from '../../../../services/FetchData';
import styles from './styles';

const width = Dimensions.get('window').width;

const ApiUpcomingMovie = () => {
  const renderFunc = ({item}) => {
    return (
      <View style={styles.renderView}>
        <ImageBackground
          resizeMode="contain"
          style={styles.imgOneStyle}
          imageStyle={styles.imageStyle}
          source={{uri: BASE_IMG_URL + 'w500' + item.backdrop_path}}>
          <Text>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  };
  const {data, isLoading, isError} = useQuery('Upcoming', FetchUpcomingMovie);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>{isError.message}</Text>;
  }

  return (
    <>
      <View style={styles.carouselView}>
        <Carousel
          style={styles.carousel}
          data={data}
          renderItem={renderFunc}
          // loop
          sliderWidth={width * 0.9}
          itemWidth={width * 0.85}
          // itemHeight={height}
        />

        {/* {data !== undefined ? <UpgradePlanSlider data={data} /> : null} */}
      </View>
    </>
  );
};

export default ApiUpcomingMovie;
