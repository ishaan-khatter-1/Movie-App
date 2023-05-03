import {View, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Swiper from 'react-native-swiper';
import ScreenOne from '../onboardingScreens/ScreenOne';
import ScreenTwo from '../onboardingScreens/ScreenTwo';
import ScreenThree from '../onboardingScreens/ScreenThree';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNavigation from '../../dashboard/bottomnavigation';

const GetStarted = () => {
  const [screenShown, setScreenShown] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('screenShown').then(value => {
      if (value !== null) {
        setScreenShown(true);
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
      {/* {screenShown ? (
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
      )} */}
      <Swiper
        loop={false}
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
