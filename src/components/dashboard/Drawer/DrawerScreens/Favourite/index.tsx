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
  const {goBack} = useNavigation();
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.pressableBack} onPress={() => goBack()}>
          <View style={styles.pressableSymbol}>
            <BackIcon width={30} height={30} fill={'#fff'} />
          </View>
        </TouchableOpacity>
        {/* <Text style={{color: 'white'}}>Movie Mania</Text> */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: ColorConstants.textWhite, fontSize: 20}}>
            {movie}
          </Text>
          <Text style={{color: ColorConstants.thirdOrange, fontSize: 22}}>
            {mania}
          </Text>
        </View>
      </View>
      <View style={styles.favTitleView}>
        <Text style={styles.favTitle}>{StringConstants.FavouriteTitle}</Text>
      </View>

      {data.map(item => (
        <View key={item.poster_path} style={{flexDirection: 'row', margin: 10}}>
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
            <Text style={styles.overviewText}>{item.overview}</Text>
            <TouchableOpacity
              style={{marginTop: 5}}
              onPress={() => removeItem(item)}>
              <Text style={styles.removeText}>Remove from favourites</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Favourite;
