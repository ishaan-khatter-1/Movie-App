import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Drawer from '../../../assets/dashboardStyles/Drawer';

const Drawericon = ({navigation}) => {
  console.log(navigation);
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Drawer />
    </TouchableOpacity>
  );
};

export default Drawericon;
