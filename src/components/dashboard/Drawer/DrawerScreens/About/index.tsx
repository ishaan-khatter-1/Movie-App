import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ColorConstants from '../../../../../assets/colorConstants';

import styles from './styles';
import StringConstants from '../../../../../assets/stringConstants';
import PlainHeader from '../../../../PlainHeader';

const About = () => {
  return (
    <View style={styles.container}>
      <PlainHeader title="About" />
      <Text style={styles.aboutText}>{StringConstants.AboutContent}</Text>
    </View>
  );
};

export default About;
