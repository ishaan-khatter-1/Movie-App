import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ApiHomeOne, {ApiLatestMovie} from './apiHome';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import DrawerNavigation from '../../../root/drawernavigation';
import UpgradePlanSlider from '../../Slider';
import ApiTrendingData from './apiHome';
import ApiUpcomingMovie from './ApiUpcomingMovie';
const Home = () => {
  const {navigate} = useNavigation();
  const menuDrawer = () => {
    navigate('DrawerNavigation');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.UpcomingMovieImages}>
        {/* <ApiLatestMovie /> */}
        <ApiUpcomingMovie />
      </View>
      <View style={styles.apiTrendingImg}>
        <Text style={styles.trendingTextColor}>Trending</Text>
        <ApiTrendingData />
      </View>
    </View>
  );
};

export default Home;
