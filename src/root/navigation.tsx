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
import MovieDetail from '../components/dashboard/MovieDetail';
import AllMovieData from '../components/AllMovieData';
import SearchMovie from '../components/dashboard/Movie/SearchMovie';
import Practive from '../assets/practive';
import NewPage from '../components/dashboard/NewPage';
import Home from '../components/dashboard/Home';
import ApiTrendingData from '../components/dashboard/TV';
import Trending from '../components/dashboard/MovieScreens';
import Screen from '../components/dashboard/MovieScreens/Screens';
import MovieType from '../components/dashboard/MovieScreens/Screens';
import MovieScreen from '../components/dashboard/MovieScreens';
import PopularMovie from '../components/dashboard/MovieScreens/Screens/PopularMovie';
import HotMovie from '../components/dashboard/MovieScreens/Screens/HotMovie';
import RecommendedMovie from '../components/dashboard/MovieScreens/Screens/RecommendedMovie';
import TrendingMovie from '../components/dashboard/MovieScreens/Screens/TrendingMovie';
import UpcomingMovie from '../components/dashboard/MovieScreens/Screens/UpcomingMovie';
import SearchComponent from '../components/dashboard/SearchComponent';
import indexTwo from '../components/dashboard/SearchComponent/indexTwo';
import IndexTwo from '../components/dashboard/SearchComponent/indexTwo';
import DiscoverTv from '../components/dashboard/MovieScreens/Screens/DiscoverTv';
import PopularTv from '../components/dashboard/MovieScreens/Screens/PopularTv';
import RecommendedTv from '../components/dashboard/MovieScreens/Screens/RecommendedTv';
import TrendingTv from '../components/dashboard/MovieScreens/Screens/TrendingTv';
import Favourite from '../components/dashboard/Drawer/DrawerScreens/Favourite';

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
        // initialRouteName="Favourite"
        initialRouteName="DrawerNavigation"
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

        {/* <Stack.Screen name="Dash" component={Dash} /> */}
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />

        <Stack.Screen name="MovieScreen" component={MovieScreen} />
        <Stack.Screen name="MovieType" component={MovieType} />
        <Stack.Screen name="PopularMovie" component={PopularMovie} />
        <Stack.Screen name="TrendingMovie" component={TrendingMovie} />
        <Stack.Screen name="HotMovie" component={HotMovie} />
        <Stack.Screen name="RecommendedMovie" component={RecommendedMovie} />
        <Stack.Screen name="UpcomingMovie" component={UpcomingMovie} />
        <Stack.Screen name="IndexTwo" component={IndexTwo} />
        <Stack.Screen name="DiscoverTv" component={DiscoverTv} />
        <Stack.Screen name="RecommendedTv" component={RecommendedTv} />
        <Stack.Screen name="PopularTv" component={PopularTv} />
        <Stack.Screen name="TrendingTv" component={TrendingTv} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="Favourite" component={Favourite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
