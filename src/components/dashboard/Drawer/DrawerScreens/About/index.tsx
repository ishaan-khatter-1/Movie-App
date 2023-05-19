import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ColorConstants from '../../../../../assets/colorConstants';
import BackIcon from '../../../../../assets/svgIcons/BackIcon';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import StringConstants from '../../../../../assets/stringConstants';

const About = () => {
  const movie = StringConstants.AppNameFirstLetter;
  const mania = StringConstants.AppNameSecondLetter;
  const {goBack} = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.pressableBack} onPress={() => goBack()}>
          <View style={styles.pressableSymbol}>
            <BackIcon width={30} height={30} fill={'#fff'} />
          </View>
        </TouchableOpacity>
        {/* <Text style={{color: 'white'}}>Movie Mania</Text> */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: ColorConstants.textWhite, fontSize: 20}}>
            {movie}
          </Text>
          <Text style={{color: ColorConstants.thirdOrange, fontSize: 22}}>
            {mania}
          </Text>
        </View>
      </View>
      <Text style={styles.aboutTitle}>{StringConstants.AboutTitle}</Text>
      <Text style={styles.aboutText}>{StringConstants.AboutContent}</Text>
    </View>
  );
};

export default About;
