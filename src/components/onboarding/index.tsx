import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import styles from './styles';
import {MotiView} from 'moti';
import {StackActions, useNavigation} from '@react-navigation/native';
import StringConstants from '../../assets/stringConstants';

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  // const dispatch = useDispatch();
  const {dispatch} = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // const {dispatch} = useNavigation();
      setShow(false);
      console.log(show);
      dispatch(StackActions.replace('GetStarted')); // replace with your screen name
    }, 2280);
    // console.log(show);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View style={styles.mainView}>
      <View style={styles.splashMotiContainer}>
        <View style={styles.movieManiaText}>
          <MotiView
            from={{
              scale: 1,
              opacity: 1,
              translateX: -1000,
              // rotate: '360deg',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              translateX: 0,
              // rotate: '360deg',
            }}
            transition={{
              // loop: true,
              type: 'timing',
              duration: 1500,
            }}>
            <Text style={[styles.splashText, {color: '#fff'}]}>
              {StringConstants.AppNameFirstLetter}
            </Text>
          </MotiView>
          <MotiView
            from={{
              scale: 1,
              opacity: 1,
              translateX: 1000,
              // rotate: '360deg',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              translateX: 0,
            }}
            transition={{
              type: 'timing',
              duration: 1500,
            }}>
            <Text style={styles.splashText}>
              {StringConstants.AppNameSecondLetter}
            </Text>
          </MotiView>
        </View>
      </View>
      <View style={styles.lottieStyleView}>
        {show ? (
          <Lottie
            style={styles.lottieStyle}
            source={require('../../assets/lottie/splash2.json')}
            autoPlay
          />
        ) : (
          <Lottie
            style={styles.lottieStyle}
            source={require('../../assets/lottie/splash2.json')}
          />
        )}
      </View>
    </View>
  );
};

export default SplashScreen;
