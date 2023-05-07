import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const TwoColor = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <LinearGradient
        colors={['#FF8F71', '#EF2D1A']}
        style={{backgroundColor: 'red'}}>
        <Text>TwoColor</Text>
      </LinearGradient>
    </View>
  );
};

export default TwoColor;
