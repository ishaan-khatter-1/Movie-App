import React, {useEffect, useState} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigation from '../bottomnavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // props => console.log(props)
        // drawerIcon: () => <Drawericon />,
        // drawers
      }}
      // drawerIcon={() => null}
      // drawerStyle={{
      //   backgroundColor: '#fff',
      //   width: 240,
      // }}
      // drawerType="permanent"
      drawerContent={() => null}>
      <Drawer.Screen name="BottomNavigation" component={BottomNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
