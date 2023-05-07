import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from './bottomnavigation';
import CustomDrawer from '../components/dashboard/Drawer/CustomDrawer';
import {Text} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
