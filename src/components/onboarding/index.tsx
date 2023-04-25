import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.splashTextView}>
        <Text style={styles.splashText}>Movie Mania</Text>
      </View>
      <View style={styles.lottieStyleView}>
        <Lottie
          style={styles.lottieStyle}
          source={require('../../assets/lottie/splash.json')}
          autoPlay
          // loop
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'red',
    flex: 1,
  },
  splashTextView: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
  },
  splashText: {
    color: 'brown',
    fontSize: 22,
    fontWeight: '700',
  },
  lottieStyleView: {
    alignItems: 'center',
    marginTop: 70,
  },
  lottieStyle: {
    width: 270,
    height: 270,
    backgroundColor: 'blue',
  },
});
