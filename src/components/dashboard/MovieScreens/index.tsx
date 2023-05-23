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
import routes from '../../../assets/routes';

const width = Dimensions.get('window').width;

interface MovieComponent {
  FetchData?: () => {};
  genre?: string;
}

const MovieScreen = ({FetchData, genre}: MovieComponent, prop: any) => {
  const {navigate, goBack} = useNavigation();

  const renderFuncFlatlist = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate(routes.dashboard.MovieTvDetail.path, {item});
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
    <View style={{flex: 1}}>
      <PlainHeader title={genre} />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.FlatlistView}>
          <FlatList
            data={data}
            renderItem={renderFuncFlatlist}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieScreen;
