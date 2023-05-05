import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ApiHomeOne from './apiHome';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import DrawerNavigation from './drawernavigation';
import UpgradePlanSlider from '../../Slider';
const Home = () => {
  const {navigate} = useNavigation();
  const menuDrawer = () => {
    navigate('DrawerNavigation');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.btnClickOne}></View>
      <View style={styles.apiImg}>
        {/* <UpgradePlanSlider /> */}
        <ApiHomeOne />
      </View>
    </View>
  );
};

export default Home;
