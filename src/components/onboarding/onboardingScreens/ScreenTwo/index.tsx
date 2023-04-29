import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgUri} from 'react-native-svg';
import {MotiView} from 'moti';
import styleOne from '../ScreenOne/styles';
import styleTwo from './styles';
import ButtonOnboard from '../../onboradingButtons';

const ScreenTwo = () => {
  return (
    <View style={styleTwo.container}>
      <View style={styleTwo.containerOne}>
        <View>
          <MotiView
            style={styleTwo.textView}
            from={{
              scale: 0.9,
              opacity: 0.8,
              translateY: 50,
              // rotate: '360deg',
            }}
            animate={{
              scale: 1,
              opacity: 1,
              translateY: 0,
              // rotate: '360deg',
            }}
            transition={{
              loop: true,
              type: 'timing',
              duration: 2000,
            }}>
            <View style={styleTwo.textView2}>
              <Text style={styleTwo.textstyle}>
                Take a look at latest and trending Movies.
              </Text>
            </View>
          </MotiView>
          <View style={styleTwo.containerTwo}>
            <MotiView
              style={styleTwo.imgView}
              from={{
                scale: 0.7,
                opacity: 0.8,
                translateX: -50,
                // rotate: '360deg',
              }}
              animate={{
                scale: 1,
                opacity: 1,
                translateX: 0,
                // rotate: '360deg',
              }}
              transition={{
                loop: true,
                type: 'timing',
                duration: 2000,
              }}>
              <View style={styleTwo.img1View}>
                <Image
                  style={styleTwo.img}
                  source={require('../../../../assets/getStartedScreens/simpleImages/img6.png')}
                />
              </View>
            </MotiView>
            <MotiView
              style={styleTwo.imgView2Motiview}
              from={{scale: 0.7, opacity: 0.8, translateX: 50}}
              animate={{scale: 1, opacity: 1, translateX: 0}}
              transition={{
                loop: true,
                type: 'timing',
                duration: 2000,
              }}>
              <View style={styleTwo.img2View}>
                <Image
                  style={styleTwo.img}
                  source={require('../../../../assets/getStartedScreens/simpleImages/img7.jpg')}
                />
              </View>
            </MotiView>
          </View>
        </View>
        <View style={styleTwo.skipbtn}>
          <ButtonOnboard text="Skip To DashBoard" />
        </View>
      </View>
    </View>
  );
};

export default ScreenTwo;
