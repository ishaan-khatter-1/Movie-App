import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_IMG_URL} from '../../../../../services';
import BackIcon from '../../../../../assets/svgIcons/BackIcon';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ColorConstants from '../../../../../assets/colorConstants';
import StringConstants from '../../../../../assets/stringConstants';
import PlainHeader from '../../../../PlainHeader';
import fonts from '../../../../../assets/fonts';

const Favourite = () => {
  const [data, setData] = useState([]);

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
  const movie = StringConstants.AppNameFirstLetter;
  const mania = StringConstants.AppNameSecondLetter;
  const {navigate, goBack} = useNavigation();
  return (
    <View
      style={{
        // paddingBottom: 60,
        flex: 1,
        backgroundColor: ColorConstants.backgroundWhite,
      }}>
      <PlainHeader />
      <ScrollView>
        <View style={styles.favTitleView}>
          <Text style={styles.favTitle}>{StringConstants.FavouriteTitle}</Text>
        </View>

        {data.length === 0 ? (
          <View style={styles.noFavView}>
            <Text style={styles.noFavText}>{StringConstants.NoFavourite}</Text>
          </View>
        ) : (
          data.map(item => (
            <TouchableOpacity
              onPress={() => {
                navigate('MovieTvDetail', {item});
              }}>
              <View
                key={item.poster_path}
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  // height: 215,
                  // backgroundColor: 'red',
                }}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imageStyle}
                  source={{
                    uri: BASE_IMG_URL + 'original' + item.poster_path,
                  }}></ImageBackground>
                <View style={styles.titleTextView}>
                  <Text style={styles.titleText}>
                    {item.title ? item.title : item.name}
                  </Text>
                  <TouchableOpacity
                    style={{marginTop: 5}}
                    onPress={() => removeItem(item)}>
                    <Text style={styles.removeText}>
                      Remove from favourites
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.overviewText}>{item.overview}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Favourite;
