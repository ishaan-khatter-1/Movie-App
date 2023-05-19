import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../components/onboarding';
import GetStarted from '../components/onboarding/getStarted';
import DrawerNavigation from './drawernavigation';

import MovieType from '../components/dashboard/MovieScreens/Screens';
import MovieScreen from '../components/dashboard/MovieScreens';
import PopularMovie from '../components/dashboard/MovieScreens/Screens/PopularMovie';
import HotMovie from '../components/dashboard/MovieScreens/Screens/HotMovie';
import RecommendedMovie from '../components/dashboard/MovieScreens/Screens/RecommendedMovie';
import TrendingMovie from '../components/dashboard/MovieScreens/Screens/TrendingMovie';
import UpcomingMovie from '../components/dashboard/MovieScreens/Screens/UpcomingMovie';

import IndexTwo from '../components/dashboard/SearchComponent/indexTwo';
import DiscoverTv from '../components/dashboard/MovieScreens/Screens/DiscoverTv';
import PopularTv from '../components/dashboard/MovieScreens/Screens/PopularTv';
import RecommendedTv from '../components/dashboard/MovieScreens/Screens/RecommendedTv';
import TrendingTv from '../components/dashboard/MovieScreens/Screens/TrendingTv';
import Favourite from '../components/dashboard/Drawer/DrawerScreens/Favourite';
import MovieTvDetail from '../components/dashboard/MovieTvDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import About from '../components/dashboard/Drawer/DrawerScreens/About';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2280);
  }, []);

  // const [screenShown, setScreenShown] = useState(false);
  // const {dispatch} = useNavigation();
  // useEffect(() => {
  //   AsyncStorage.getItem('screenShown').then(value => {
  //     if (value !== null) {
  //       setScreenShown(true);
  //       dispatch(StackActions.replace('DrawerNavigation'));
  //     }
  //     // if (value !== 'true') {
  //     //   setScreenShown(true);
  //     // }
  //     else {
  //       AsyncStorage.setItem('screenShown', 'true');
  //       // setScreenShown(true);
  //     }
  //   });
  // }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />

        {/* {screenShown ? (
          <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        ) : (
          <Stack.Screen
            name="GetStarted"
            component={GetStarted}
            options={{
              headerShown: false,
            }}
          />
        )} */}

        {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}

        <Stack.Screen name="MovieScreen" component={MovieScreen} />
        <Stack.Screen name="MovieType" component={MovieType} />
        <Stack.Screen name="PopularMovie" component={PopularMovie} />
        <Stack.Screen name="TrendingMovie" component={TrendingMovie} />
        <Stack.Screen name="HotMovie" component={HotMovie} />
        <Stack.Screen name="RecommendedMovie" component={RecommendedMovie} />
        <Stack.Screen name="UpcomingMovie" component={UpcomingMovie} />
        <Stack.Screen name="DiscoverTv" component={DiscoverTv} />
        <Stack.Screen name="RecommendedTv" component={RecommendedTv} />
        <Stack.Screen name="PopularTv" component={PopularTv} />
        <Stack.Screen name="TrendingTv" component={TrendingTv} />
        <Stack.Screen name="MovieDetail" component={MovieTvDetail} />
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

// import React, {useEffect, useState} from 'react';
// import {
//   NavigationContainer,
//   StackActions,
//   useNavigation,
// } from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SplashScreen from '../components/onboarding';
// import GetStarted from '../components/onboarding/getStarted';
// import DrawerNavigation from './drawernavigation';

// import MovieType from '../components/dashboard/MovieScreens/Screens';
// import MovieScreen from '../components/dashboard/MovieScreens';
// import PopularMovie from '../components/dashboard/MovieScreens/Screens/PopularMovie';
// import HotMovie from '../components/dashboard/MovieScreens/Screens/HotMovie';
// import RecommendedMovie from '../components/dashboard/MovieScreens/Screens/RecommendedMovie';
// import TrendingMovie from '../components/dashboard/MovieScreens/Screens/TrendingMovie';
// import UpcomingMovie from '../components/dashboard/MovieScreens/Screens/UpcomingMovie';

// import IndexTwo from '../components/dashboard/SearchComponent/indexTwo';
// import DiscoverTv from '../components/dashboard/MovieScreens/Screens/DiscoverTv';
// import PopularTv from '../components/dashboard/MovieScreens/Screens/PopularTv';
// import RecommendedTv from '../components/dashboard/MovieScreens/Screens/RecommendedTv';
// import TrendingTv from '../components/dashboard/MovieScreens/Screens/TrendingTv';
// import Favourite from '../components/dashboard/Drawer/DrawerScreens/Favourite';
// import MovieTvDetail from '../components/dashboard/MovieTvDetail';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const Stack = createStackNavigator();

// const Navigation = () => {
//   const [splash, setSplash] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setSplash(false);
//     }, 2280);
//   }, []);

//   const [screenShown, setScreenShown] = useState(false);
//   const {dispatch} = useNavigation();
//   useEffect(() => {
//     AsyncStorage.getItem('screenShown').then(value => {
//       if (value !== null) {
//         setScreenShown(true);
//         dispatch(StackActions.replace('DrawerNavigation'));
//       } else {
//         AsyncStorage.setItem('screenShown', 'true');
//         // setScreenShown(true);
//       }
//     });
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName={
//           splash
//             ? 'SplashScreen'
//             : screenShown
//             ? 'DrawerNavigation'
//             : 'GetStarted'
//         }
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />

//         <Stack.Screen name="GetStarted" component={GetStarted} />

//         <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />

//         <Stack.Screen name="MovieScreen" component={MovieScreen} />

//         <Stack.Screen name="MovieType" component={MovieType} />

//         <Stack.Screen name="PopularMovie" component={PopularMovie} />

//         <Stack.Screen name="TrendingMovie" component={TrendingMovie} />

//         <Stack.Screen name="HotMovie" component={HotMovie} />

//         <Stack.Screen name="RecommendedMovie" component={RecommendedMovie} />

//         <Stack.Screen name="UpcomingMovie" component={UpcomingMovie} />

//         <Stack.Screen name="DiscoverTv" component={DiscoverTv} />

//         <Stack.Screen name="RecommendedTv" component={RecommendedTv} />

//         <Stack.Screen name="PopularTv" component={PopularTv} />

//         <Stack.Screen name="TrendingTv" component={TrendingTv} />

//         <Stack.Screen name="MovieDetail" component={MovieTvDetail} />

//         <Stack.Screen name="Favourite" component={Favourite} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;
