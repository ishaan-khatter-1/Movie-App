import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/dashboard/Drawer/CustomDrawer';
import {Text} from 'react-native';
import BottomNavigation from './bottomnavigation';

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
