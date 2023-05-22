import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../components/onboarding/SplashScreen';
import GetStarted from '../components/onboarding/getStarted';
import DrawerNavigation from './drawernavigation';

import PopularMovie from '../components/dashboard/MovieScreens/Screens/PopularMovie';
import HotMovie from '../components/dashboard/MovieScreens/Screens/HotMovie';
import RecommendedMovie from '../components/dashboard/MovieScreens/Screens/RecommendedMovie';
import TrendingMovie from '../components/dashboard/MovieScreens/Screens/TrendingMovie';
import UpcomingMovie from '../components/dashboard/MovieScreens/Screens/UpcomingMovie';

import DiscoverTv from '../components/dashboard/MovieScreens/Screens/DiscoverTv';
import PopularTv from '../components/dashboard/MovieScreens/Screens/PopularTv';
import RecommendedTv from '../components/dashboard/MovieScreens/Screens/RecommendedTv';
import TrendingTv from '../components/dashboard/MovieScreens/Screens/TrendingTv';
import Favourite from '../components/dashboard/Drawer/DrawerScreens/Favourite';
import MovieTvDetail from '../components/dashboard/MovieTvDetail';
import About from '../components/dashboard/Drawer/DrawerScreens/About';
import routes from '../assets/routes';

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
        initialRouteName={routes.Onboarding.SplashScreen.path}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.Onboarding.SplashScreen.path}
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={routes.Onboarding.getStarted.path}
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={routes.root.DrawerNavigation.path}
          component={DrawerNavigation}
        />

        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.PopularMovie.path}
          component={PopularMovie}
        />
        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.TrendingMovie.path}
          component={TrendingMovie}
        />
        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.HotMovie.path}
          component={HotMovie}
        />
        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.RecommendedMovie.path}
          component={RecommendedMovie}
        />
        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.UpcomingMovie.path}
          component={UpcomingMovie}
        />
        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.DiscoverTV.path}
          component={DiscoverTv}
        />
        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.RecommendedTv.path}
          component={RecommendedTv}
        />
        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.PopularTv.path}
          component={PopularTv}
        />
        <Stack.Screen
          name={routes.dashboard.MovieScreens.Screens.TrendingTv.path}
          component={TrendingTv}
        />
        <Stack.Screen
          name={routes.dashboard.MovieTvDetail.path}
          component={MovieTvDetail}
        />
        <Stack.Screen
          name={routes.dashboard.Drawer.DrawerScreens.Favourites.path}
          component={Favourite}
        />
        <Stack.Screen
          name={routes.dashboard.Drawer.DrawerScreens.About.path}
          component={About}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
