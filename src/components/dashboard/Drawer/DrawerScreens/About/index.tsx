import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ColorConstants from '../../../../../assets/colorConstants';

import styles from './styles';
import StringConstants from '../../../../../assets/stringConstants';
import PlainHeader from '../../../../PlainHeader';

const About = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: ColorConstants.backgroundWhite,
      }}>
      <PlainHeader />
      <Text style={styles.aboutTitle}>{StringConstants.AboutTitle}</Text>
      <Text style={styles.aboutText}>{StringConstants.AboutContent}</Text>
    </View>
  );
};

export default About;
