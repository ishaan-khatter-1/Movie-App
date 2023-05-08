import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import App from './index';
import SplashScreen from '../components/onboarding';
import Dash from '../components/dashboard';
import GetStarted from '../components/onboarding/getStarted';
import BottomNavigation from './bottomnavigation';
import DrawerNavigation from './drawernavigation';
import Settings from '../components/dashboard/Drawer/DrawerScreens/Settings';
import About from '../components/dashboard/Drawer/DrawerScreens/About';
import TwoColor from '../components/LinearGradient/TwoColor';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2280);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="DrawerNavigation"
        // initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          // cardStyleInterpolator: ({current, layouts}) => {
          //   return {
          //     cardStyle: {
          //       transform: [
          //         {
          //           translateX: current.progress.interpolate({
          //             inputRange: [0, 1],
          //             outputRange: [layouts.screen.width, 0],
          //           }),
          //         },
          //       ],
          //     },
          //   };
          // },
        }}>
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        {splash ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
        ) : null}
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />

        {/* <Stack.Screen name="Dash" component={Dash} /> */}
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="TwoColor" component={TwoColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Header">
//         <Stack.Screen name="Header" component={Header} />

//         {/* <Stack.Screen name="App" component={App} /> */}
//         <Stack.Screen name="Profile" component={Profile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default Navigation;
