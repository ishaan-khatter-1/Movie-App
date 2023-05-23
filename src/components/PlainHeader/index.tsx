import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import BackIcon from '../../assets/svgIcons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import StringConstants from '../../assets/stringConstants';

interface screenHeader {
  title?: string;
}

const PlainHeader = ({title}: screenHeader) => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.pressableBack} onPress={() => goBack()}>
        <View style={styles.pressableSymbol}>
          <BackIcon width={17} height={17} fill={'#fff'} />
        </View>
      </TouchableOpacity>
      <View style={styles.HeaderView}>
        <Text style={styles.movieName}>{title}</Text>
      </View>
    </View>
  );
};

export default PlainHeader;
