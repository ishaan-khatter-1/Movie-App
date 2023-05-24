import React from 'react';

import {
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from 'react-query';

import styles from './styles';
import {BASE_IMG_URL} from '../../../services';

import {useNavigation} from '@react-navigation/native';
import PlainHeader from '../../PlainHeader';
import routes from '../../../assets/routes';
import FastImage from 'react-native-fast-image';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

interface MovieComponent {
  FetchData?: () => {};
  genre?: string;
}

const MovieScreen = ({FetchData, genre}: MovieComponent) => {
  const {navigate} = useNavigation();

  const renderFuncFlatlist = ({item}) => {
    return (
      <View>
        <Pressable
          onPress={() => {
            navigate(routes.dashboard.MovieTvDetail.path, {item});
          }}>
          {FastImage ? (
            item.poster_path && (
              <FastImage
                resizeMode="contain"
                style={styles.imgFlatlistStyle}
                source={{
                  uri: BASE_IMG_URL + 'w500' + item.poster_path,
                }}
              />
            )
          ) : (
            <ShimmerPlaceholder
              style={{
                width: 125,
                height: 125 * 1.5,
                marginVertical: 10,
                marginHorizontal: 8,
                borderRadius: 5,
              }}
            />
          )}
        </Pressable>
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
            style={styles.FlatListStyle}
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
