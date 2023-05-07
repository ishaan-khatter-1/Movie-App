import {View, Text} from 'react-native';
import React from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';

const Movie = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Movie</Text>
      <ApiMovie />
    </View>
  );
};

export default Movie;
