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
import BottomNavigation from '../components/dashboard/bottomnavigation';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3500);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Dash" component={Dash} /> */}
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
