import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {StackActions, useNavigation} from '@react-navigation/native';

interface Loginbtntext {
  text: string;
}

const ButtonOnboard = ({text}: Loginbtntext) => {
  const movToDashboard = () => {
    dispatch(StackActions.replace('DrawerNavigation'));
    navigate('DrawerNavigation');
  };
  const {navigate, dispatch} = useNavigation();
  return (
    <View style={styles.btnView}>
      <TouchableOpacity onPress={movToDashboard}>
        <View style={styles.skipTextView}>
          <Text style={styles.skipbtntext}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonOnboard;
