import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styleThree from './styles';
import ButtonOnboard from '../../onboradingButtons';
import {MotiView} from 'moti';
import Lottie from 'lottie-react-native';
import StringConstants from '../../../../assets/stringConstants';
import ColorConstants from '../../../../assets/colorConstants';
import fonts from '../../../../assets/fonts';

const ScreenThree = () => {
  return (
    <View style={styleThree.mainContainer}>
      <View style={styleThree.mainContainer2}>
        <View style={styleThree.textView}>
          <View style={styleThree.textHeaderView}>
            <Text style={styleThree.textHeader}>
              {StringConstants.ScreenThreeOnboardHeader}
            </Text>
            <Text style={[styleThree.textHeader, styleThree.textHeader2]}>
              {StringConstants.AppNameFirstLetter}
              {StringConstants.AppNameSecondLetter}
            </Text>
          </View>
          <Text style={styleThree.thirdScreenContent}>
            {StringConstants.ScreenThreeOnboard}
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
        <View style={{marginLeft: '6%'}}>
          <ButtonOnboard text={StringConstants.GetStarted} />
        </View>
      </View>
    </View>
  );
};

export default ScreenThree;
