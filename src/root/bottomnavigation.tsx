import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
import MovieIconFaded from '../assets/dashboardStyles/TabStyles/MovieIconFaded';
import TelevisionIcon from '../assets/dashboardStyles/TabStyles/TelevisionIcon';
import HomeIconFaded from '../assets/dashboardStyles/TabStyles/HomeIconFaded';
import TelevisionIconFaded from '../assets/dashboardStyles/TabStyles/TelevisionIconFaded';

import Drawericon from '../components/dashboard/Drawer';
import LinearGradient from 'react-native-linear-gradient';
// import Settings from '../components/dashboard/Drawer/DrawerScreens/Settings';
// import Settings from '../components/dashboard/Drawer/DrawerScreens/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const movie = 'M💿VIE  ';
const mania = 'MANIA';

const BottomNavigation = ({navigation}) => {
  console.log(navigation);
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
          headerTitle: ({}) => (
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: ColorConstants.textWhite, fontSize: 20}}>
                {movie}
              </Text>
              <Text style={{color: ColorConstants.thirdOrange, fontSize: 22}}>
                {mania}
              </Text>
            </View>
          ),
          headerTitleAlign: 'center',
          // headerLeft: () => <Drawericon navigation={navigation} />,
          headerLeft: ({}) => (
            <View style={{marginLeft: 10}}>
              <TouchableOpacity onPress={({}) => navigation.openDrawer()}>
                <Drawer
                  width={35}
                  height={35}
                  fill={ColorConstants.textWhite}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 15}}>
              <Search width={30} height={30} fill={ColorConstants.textWhite} />
            </View>
          ),
          headerStyle: {backgroundColor: ColorConstants.mainBgColor},
          headerTitleStyle: {color: ColorConstants.textWhite},
          // ...titleStyle,
          // headerStyle: titleStyle,
          tabBarStyle: {...tabBarStyling},
          tabBarShowLabel: false,
          // tabBarStyle: tabBarStyling,  /// this is also working??
        }}>
        <Tab.Screen name="Home" component={Home} options={homeTab} />
        <Tab.Screen name="Movie" component={Movie} options={movieTab} />
        <Tab.Screen name="TV" component={Television} options={televisionTab} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator> */}
    </>
  );
};

// cons;

const homeTab = {
  tabBarIcon: ({focused}) => (
    <View>{focused ? <HomeIcon /> : <HomeIconFaded />}</View>
  ),
  // headerLeft: () => <Drawericon navigation={navigation} />,
};
const movieTab = {
  tabBarIcon: ({focused}) => (
    <View>{focused ? <MovieIcon /> : <MovieIconFaded />}</View>
  ),
};
const televisionTab = {
  tabBarIcon: ({focused}) => (
    <View>
      {focused ? (
        <TelevisionIcon width={38} height={38} />
      ) : (
        <TelevisionIconFaded width={38} height={38} />
      )}
    </View>
  ),
};

const tabBarStyling = {
  // position: 'absolute',
  backgroundColor: ColorConstants.backgroundWhite,
  // shadowColor: 'rgb(7,44,133)',
  // shadowOffset: {
  //   width: 0,
  //   height: 100,
  // },
  elevation: 50,
  // bottom: '3%',
  // borderRadius: 15,
  // marginHorizontal: 20,
  height: 80,
  borderTopWidth: 0,
  showLabel: false,
};

export default BottomNavigation;

// const homeScreen = {...homeTab, titleStyle};
