import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/dashboard/Home';
import Movie from '../components/dashboard/Movie';
import Television from '../components/dashboard/TV';
import ColorConstants from '../assets/colorConstants';
// import Drawer from '../../assets/svgIcons/drawer';
import Drawer from '../assets/dashboardStyles/Drawer';
// import Search from '../../assets/dashboardStyles/Search';
import Search from '../assets/dashboardStyles/Search';
import HomeIcon from '../assets/dashboardStyles/TabStyles/HomeIcon';
import MovieIcon from '../assets/dashboardStyles/TabStyles/MovieIcon';

import Drawericon from '../components/dashboard/Drawer';
// import Settings from '../components/dashboard/Drawer/DrawerScreens/Settings';
// import Settings from '../components/dashboard/Drawer/DrawerScreens/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomNavigation = ({navigation}) => {
  // console.log(props.navigation);
  return (
    <>
      <Tab.Navigator
        // ={{
        //   style: {
        //     position: 'absolute',
        //     bottom: 25,
        //     left: 20,
        //   },
        // }}
        // screenOptions={{}}
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerLeft: ({}) => (
            <TouchableOpacity onPress={({}) => navigation.openDrawer()}>
              <Drawer />
            </TouchableOpacity>
          ),
          headerRight: () => <Search />,
          headerStyle: {backgroundColor: ColorConstants.baseColor},
          headerTitleStyle: {color: ColorConstants.titleColor},
          // ...titleStyle,
          // headerStyle: titleStyle,
          tabBarStyle: {...tabBarStyling},
          tabBarShowLabel: false,
          // tabBarStyle: tabBarStyling,  /// this is also working??
        }}>
        <Tab.Screen name="Home" component={Home} options={homeTab} />
        <Tab.Screen name="Movie" component={Movie} options={movieTab} />
        <Tab.Screen name="TV" component={Television} options={titleStyle} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator> */}
    </>
  );
};

// cons;

const homeTab = {
  tabBarIcon: ({}) => (
    <View>
      <HomeIcon />
    </View>
  ),
};
const movieTab = {
  tabBarIcon: ({}) => (
    <View>
      <MovieIcon />
    </View>
  ),
};

const tabBarStyling = {
  // position: 'absolute',
  backgroundColor: ColorConstants.baseColor,
  shadowColor: 'rgb(7,44,133)',
  shadowOffset: {
    width: 0,
    height: 100,
  },
  elevation: 50,
  // bottom: '3%',
  // borderRadius: 15,
  // marginHorizontal: 20,
  height: 80,
  borderTopWidth: 0,
  showLabel: false,
};

const titleStyle = ({navigation}) => ({
  // console.log(navigation),
  // ()=>{console.log(navigation)}
  // title: 'Home',
  // headerStyle: {backgroundColor: ColorConstants.baseColor},
  // headerTitleStyle: {color: ColorConstants.titleColor},
  // headerLeft: () => <Drawer />,
  // headerLeft: () => <Drawericon drawerOpen={navigation} />,
  // headerRight: () => <Search />,
});
export default BottomNavigation;

const homeScreen = {...homeTab, titleStyle};
