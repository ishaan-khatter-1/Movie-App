import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {MotiView} from 'moti';
import styleOne from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonOnboard from '../../onboradingButtons';
import StringConstants from '../../../../assets/stringConstants';

const ScreenOne = () => {
  return (
    <SafeAreaView style={styleOne.container}>
      <View style={styleOne.containerTwo}>
        <View>
          <MotiView
            style={styleOne.textView}
            from={{
              scale: 1,
              opacity: 1,
              translateY: 25,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              loop: true,
              type: 'timing',
              duration: 2000,
            }}>
            <Text style={styleOne.textstyle}>
              {StringConstants.ScreenOneOnboard}
            </Text>
          </MotiView>
          <MotiView
            style={styleOne.imgView}
            from={{
              scale: 1,
              opacity: 1,
              translateY: -25,
              // translateX: -50,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              translateY: 0,
              // translateX: 50,
            }}
            transition={{
              loop: true,

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
            <ButtonOnboard text={StringConstants.SkipToDashBoard} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenOne;
