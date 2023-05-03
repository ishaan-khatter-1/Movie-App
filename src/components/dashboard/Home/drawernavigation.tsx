import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Movie from '../Movie';
import Television from '../TV';
import BottomNavigation from '../bottomnavigation';
import Drawericon from '../../../components/dashboard/Drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerIcon: () => <Drawericon />,
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
