import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Movie from './Movie';
import Television from './TV';
import ColorConstants from '../../assets/colorConstants';
// import Drawer from '../../assets/svgIcons/drawer';
import Drawer from '../../assets/dashboardStyles/Drawer';
import Search from '../../assets/dashboardStyles/Search';
import Drawericon from './Drawer';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      // screenOptions={{}}
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        // headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen name="Home" component={Home} options={titleStyle} />
      <Tab.Screen name="Movie" component={Movie} />
      <Tab.Screen name="TV" component={Television} />
    </Tab.Navigator>
  );
};

const titleStyle = ({navigation}) => ({
  // title: 'Home',
  headerStyle: {backgroundColor: ColorConstants.mainBgColor},
  headerTitleStyle: {color: ColorConstants.titleColor},
  // headerLeft: () => <Drawer />,
  headerLeft: () => <Drawericon drawerOpen={navigation} />,

  headerRight: () => <Search />,
});
export default BottomNavigation;
