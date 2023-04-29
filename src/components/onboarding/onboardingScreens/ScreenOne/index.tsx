import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {MotiView} from 'moti';
import styleOne from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonOnboard from '../../onboradingButtons';

const ScreenOne = () => {
  return (
    <SafeAreaView style={styleOne.container}>
      <View style={styleOne.containerTwo}>
        <View>
          <MotiView
            style={styleOne.textView}
            from={{
              scale: 0,
              opacity: 0,
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
              duration: 2000,
            }}>
            <Text style={styleOne.textstyle}>
              Your one stop destination for comedy, drama, thrillers is here.
            </Text>
            {/* <Text style={styleOne.textstyle}>
            Get Started and know everything about Movies.
          </Text> */}
          </MotiView>
          <MotiView style={styleOne.textView}></MotiView>
          <MotiView
            style={styleOne.imgView}
            from={{
              scale: 0,
              opacity: 0,
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
              duration: 2000,
            }}>
            <Image
              style={styleOne.img}
              source={require('../../../../assets/getStartedScreens/simpleImages/img4.png')}
            />
          </MotiView>
        </View>
        <View>
          <View style={styleOne.skipbtn}>
            <ButtonOnboard text="Skip To DashBoard" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenOne;
