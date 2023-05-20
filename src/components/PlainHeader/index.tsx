import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import BackIcon from '../../assets/svgIcons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import StringConstants from '../../assets/stringConstants';

const PlainHeader = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.pressableBack} onPress={() => goBack()}>
        <View style={styles.pressableSymbol}>
          <BackIcon width={30} height={30} fill={'#fff'} />
        </View>
      </TouchableOpacity>
      {/* <Text style={{color: 'white'}}>Movie Mania</Text> */}
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.movieName}>
          {StringConstants.AppNameFirstLetter}
        </Text>
        <Text style={styles.maniaName}>
          {StringConstants.AppNameSecondLetter}
        </Text>
      </View>
    </View>
  );
};

export default PlainHeader;
