import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_IMG_URL} from '../../../services';
import styles from './styles';
import BackIcon from '../../../assets/svgIcons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import StarRating from '../../../assets/svgIcons/starRating';
import FavouriteIcon from '../../../assets/svgIcons/favourite';

import {MovieTvData} from '../../../services/FetchData';
import {useQuery} from 'react-query';
import ColorConstants from '../../../assets/colorConstants';
import PlainHeader from '../../PlainHeader';

const MovieTvDetal = props => {
  const [isFavourite, setIsFavourite] = useState(false);
  const {item} = props.route.params;
  const {data, isLoading, isError} = useQuery('MovieTVData', MovieTvData);

  useEffect(() => {
    checkFavourite();
  }, [item]);

  const checkFavourite = async () => {
    const favData = await AsyncStorage.getItem('FavDetail');
    if (favData) {
      const favArray = JSON.parse(favData);
      const isFav = favArray.some(
        favItem => favItem.poster_path === item.poster_path,
      );
      setIsFavourite(isFav);
    }
  };

  const toggleFavourite = async () => {
    const favData = await AsyncStorage.getItem('FavDetail');
    let favArray = [];
    if (favData) {
      favArray = JSON.parse(favData);
    }

    if (isFavourite) {
      const updatedArray = favArray.filter(
        favItem => favItem.poster_path !== item.poster_path,
      );
      setIsFavourite(false);
      await AsyncStorage.setItem('FavDetail', JSON.stringify(updatedArray));
    } else {
      favArray.push(item);
      setIsFavourite(true);
      await AsyncStorage.setItem('FavDetail', JSON.stringify(favArray));
    }
  };

  const {navigate} = useNavigation();
  const ScrollViewRef = useRef(null);

  return (
    <View style={styles.mainContainer}>
      <PlainHeader />
      <ScrollView ref={ScrollViewRef}>
        <ImageBackground
          resizeMode="stretch"
          source={{
            uri: item.backdrop_path
              ? BASE_IMG_URL + 'original' + item.backdrop_path
              : BASE_IMG_URL + 'original' + item.poster_path,
          }}
          style={styles.imgStyle}
          imageStyle={styles.imageStyle}></ImageBackground>
        <View style={styles.rating_titleView}>
          <Text style={styles.original_titleText}>
            {item.title ? item.title : item.name}
          </Text>
        </View>
        <View style={styles.ReleaseDateView}>
          <Text style={styles.releaseDateText}>Release Date</Text>
          <StarRating width={17} height={17} fill={'yellow'} />
          <Text style={styles.ratingText}>{item.vote_average}</Text>
        </View>
        <Text style={{marginLeft: 15}}>{item.release_date}</Text>
        <Text style={styles.overviewText}>{item.overview}</Text>
        <TouchableOpacity onPress={toggleFavourite}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              alignItems: 'center',
            }}>
            <FavouriteIcon
              width={30}
              height={30}
              fill={ColorConstants.mainBgColor}
              marginLeft={15}
            />
            <Text style={{marginLeft: 10, color: 'black'}}>
              {isFavourite
                ? 'Click to Remove from Favourites'
                : 'Click to Add to Favourites'}
            </Text>
          </View>
        </TouchableOpacity>

        <View>
          <Text style={styles.moreHeadTxt}>More</Text>
          <FlatList
            keyExtractor={item => item.poster_path}
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <Pressable
                    onPress={() => {
                      navigate('MovieTvDetail', {item});
                      ScrollViewRef.current?.scrollTo({y: 0});
                    }}>
                    <View style={styles.flatlistImgTextView}>
                      {item.poster_path && (
                        <ImageBackground
                          resizeMode="contain"
                          source={{
                            uri: BASE_IMG_URL + 'original' + item.poster_path,
                          }}
                          imageStyle={{
                            borderRadius: 5,
                          }}
                          style={styles.flatlistImgText}></ImageBackground>
                      )}

                      {item.poster_path && (
                        <View style={{flex: 1, height: 180, marginRight: 10}}>
                          <Text style={styles.flatListTitleText}>
                            {item.title ? item.title : item.name}
                          </Text>
                          <Text style={{marginTop: 5}}>{item.overview}</Text>
                        </View>
                      )}
                    </View>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieTvDetal;
