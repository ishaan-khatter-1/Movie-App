import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import ScreenOne from '../onboardingScreens/ScreenOne';
import ScreenTwo from '../onboardingScreens/ScreenTwo';
import ScreenThree from '../onboardingScreens/ScreenThree';
import styles from './styles';

const GetStarted = () => {
  return (
    <>
      <Swiper
        loop={false}
        showsButtons={true}
        showsButtons={false}
        dot={<View style={styles.activedot} />}>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </>
  );
};

export default GetStarted;
