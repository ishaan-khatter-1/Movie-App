import {View, Text, TextInput} from 'react-native';
import React from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';

const Movie = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <Text>Movie</Text> */}
      <View style={{flex: 1}}>
        <Text>Hello</Text>
      </View>
      <TextInput />
      <View style={{flex: 2}}>
        <ApiMovie />
      </View>
    </View>
  );
};

export default Movie;
