import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_IMG_URL} from '../../../../../services';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ColorConstants from '../../../../../assets/colorConstants';
import StringConstants from '../../../../../assets/stringConstants';
import PlainHeader from '../../../../PlainHeader';

const Favourite = () => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const storedData = await AsyncStorage.getItem('FavDetail');
    if (storedData !== null) {
      setData(JSON.parse(storedData));
    }
  };

  const removeItem = async item => {
    const updatedData = data.filter(
      dataItem => dataItem.poster_path !== item.poster_path,
    );
    await AsyncStorage.setItem('FavDetail', JSON.stringify(updatedData));
    setData(updatedData);
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  };

  const {navigate} = useNavigation();
  return (
    <View
      style={{
        // paddingBottom: 60,
        flex: 1,
        backgroundColor: ColorConstants.backgroundWhite,
      }}>
      <PlainHeader />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.favTitleView}>
          <Text style={styles.favTitle}>{StringConstants.FavouriteTitle}</Text>
        </View>

        {data.length === 0 ? (
          <View style={styles.noFavView}>
            <Text style={styles.noFavText}>{StringConstants.NoFavourite}</Text>
          </View>
        ) : (
          data.map(item => (
            <View key={item.poster_path} style={styles.mainFavView}>
              <Pressable
                onPress={() => {
                  navigate('MovieTvDetail', {item});
                }}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imageStyle}
                  imageStyle={{borderRadius: 5}}
                  source={{
                    uri: BASE_IMG_URL + 'original' + item.poster_path,
                  }}></ImageBackground>
              </Pressable>
              <View style={styles.titleTextView}>
                <Pressable
                  onPress={() => {
                    navigate('MovieTvDetail', {item});
                  }}>
                  <Text style={styles.titleText}>
                    {item.title ? item.title : item.name}
                  </Text>

                  <Text style={styles.overviewText}>{item.overview}</Text>
                </Pressable>
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => removeItem(item)}>
                  <Text style={styles.removeText}>
                    {StringConstants.RemoveFromFav}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Favourite;
