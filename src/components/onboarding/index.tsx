import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Lottie from 'lottie-react-native';
import styles from './styles';
import {MotiView} from 'moti';

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      console.log(show);
    }, 100);
    // console.log(show);
    // return () => clearTimeout(timeoutId);
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
            <Text style={[styles.splashText, {color: '#fff'}]}>MOVIE</Text>
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
              // rotate: '360deg',
            }}
            transition={{
              // loop: true,
              type: 'timing',
              duration: 1500,
            }}>
            <Text style={styles.splashText}> MANIA</Text>
          </MotiView>
        </View>
      </View>
      <View style={styles.lottieStyleView}>
        {show ? (
          <Lottie
            style={styles.lottieStyle}
            source={require('../../assets/lottie/splash2.json')}
            autoPlay
            // loop
          />
        ) : (
          <Lottie
            style={styles.lottieStyle}
            source={require('../../assets/lottie/splash2.json')}
            // autoPlay
            // loop
          />
        )}
      </View>
    </View>
  );
};

export default SplashScreen;
