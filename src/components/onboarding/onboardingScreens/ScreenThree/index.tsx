import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgUri} from 'react-native-svg';
import styleThree from './styles';
import ButtonOnboard from '../../onboradingButtons';
import { MotiView } from 'moti';
import Lottie from 'lottie-react-native';


const ScreenThree = () => {
  return (
    <View style={styleThree.mainContainer}>
      <View style={styleThree.mainContainer2}>
        <View style={styleThree.textView}>
          <View style={styleThree.textHeaderView}>
          <Text style={styleThree.textHeader}>Welcome to </Text>
          <Text style={[styleThree.textHeader,styleThree.textHeader2]}>Movie Mania</Text>
          </View>
          <Text style={styleThree.thirdScreenContent}>
            Explore and select the perfect next movie.
          </Text>
              <View style={styleThree.lottieStyleView}>
                <Lottie
                  style={styleThree.lottieStyle}
                  source={require('../../../../assets/lottie/splash3.json')}
                  autoPlay
                  loop
                />
          </View>
        </View>
      </View>
      <View style={styleThree.skipbtn}>
        <View style={styleThree.skipSymbol}>
        <MotiView from={{
          opacity:0.7,

              scale: 0.8,
            }}
            animate={{
          opacity:1,

              scale: 1,
            }}
            transition={{
              loop: true,
              type: 'timing',
              duration: 1000,
            }}
            style = {styleThree.motibtnView}>
        <Text style={styleThree.btnAbovText}>></Text>
        </MotiView>
        <MotiView from={{
          opacity:0.7,
            borderColor:'white',
              scale: 0.8,
            }}
            animate={{
          opacity:1,
            borderColor:'rgb(225,0,146)',
              
              scale: 1,
            }}
            transition={{
              loop: true,
              type: 'timing',
              duration: 1000,
            }}
            style = {styleThree.motibtnView}>
        <Text style={styleThree.btnAbovText}>></Text>
        </MotiView>
        <MotiView from={{
          opacity:0.7,
              scale: 0.8,
            }}
            animate={{
          opacity:1,

              scale: 1,
            }}
            transition={{
              loop: true,
              type: 'timing',
              duration: 1000,
            }}
            style = {styleThree.motibtnView}>
        <Text style={styleThree.btnAbovText}>></Text>
        </MotiView>
        </View>
        <View style={{marginLeft:'6%'}}>
        <ButtonOnboard text="Get Started" />
        </View>
      </View>
    </View>
  );
};

export default ScreenThree;
