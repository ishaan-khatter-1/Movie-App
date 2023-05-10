import {View, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import ScreenOne from '../onboardingScreens/ScreenOne';
import ScreenTwo from '../onboardingScreens/ScreenTwo';
import ScreenThree from '../onboardingScreens/ScreenThree';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from '../../../root/bottomnavigation';
import {StackActions, useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const [screenShown, setScreenShown] = useState(false);
  const {dispatch} = useNavigation();
  useEffect(() => {
    AsyncStorage.getItem('screenShown').then(value => {
      if (value !== null) {
        setScreenShown(true);
        dispatch(StackActions.replace('DrawerNavigation'));
      }
      // if (value !== 'true') {
      //   setScreenShown(true);
      // }
      else {
        AsyncStorage.setItem('screenShown', 'true');
        // setScreenShown(true);
      }
    });
  }, []);
  return (
    <>
      {screenShown ? (
        <BottomNavigation />
      ) : (
        <Swiper
          loop={false}
          showsButtons={false}
          dot={<View style={styles.activedot} />}>
          <ScreenOne />
          <ScreenTwo />
          <ScreenThree />
        </Swiper>
      )}
    </>
  );
};

export default GetStarted;

// import {View, StyleSheet, Text} from 'react-native';
// import React from 'react';
// import Swiper from 'react-native-swiper';
// import ScreenOne from '../onboardingScreens/ScreenOne';
// import ScreenTwo from '../onboardingScreens/ScreenTwo';
// import ScreenThree from '../onboardingScreens/ScreenThree';
// import styles from './styles';

// const GetStarted = () => {
//   return (
//     <>
//       <Swiper
//         loop={false}
//         showsButtons={true}
//         showsButtons={false}
//         dot={<View style={styles.activedot} />}>
//         <ScreenOne />
//         <ScreenTwo />
//         <ScreenThree />
//       </Swiper>
//     </>
//   );
// };

// export default GetStarted;
