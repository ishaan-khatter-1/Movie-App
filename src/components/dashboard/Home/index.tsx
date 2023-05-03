import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ApiHomeOne from './apiHome';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import DrawerNavigation from './drawernavigation';
const Home = () => {
  const {navigate} = useNavigation();
  const menuDrawer = () => {
    navigate('DrawerNavigation');
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.apiImg}>
        <ApiHomeOne />
      </View>
      <View style={styles.btnClickOne}>
        <TouchableOpacity onPress={menuDrawer}>
          <Text>click here to movie.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
