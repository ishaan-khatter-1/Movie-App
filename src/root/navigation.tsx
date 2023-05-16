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
import PopularMovie from '../components/dashboard/MovieScreens/Screens/Popular';
import HotMovie from '../components/dashboard/MovieScreens/Screens/Hot';
import RecommendedMovie from '../components/dashboard/MovieScreens/Screens/Recommended';
import TrendingMovie from '../components/dashboard/MovieScreens/Screens/Trending';
import UpcomingMovie from '../components/dashboard/MovieScreens/Screens/Upcoming';

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
        // initialRouteName="SearchMovie"
        initialRouteName="DrawerNavigation"
        // initialRouteName="NewPage"
        // initialRouteName="Practive"
        // initialRouteName="SplashScreen"
        // initialRouteName="MovieDetail"
        // initialRouteName="MovieScreen"
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
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        {/* {splash ? (
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
        /> */}
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
        <Stack.Screen name="SearchMovie" component={SearchMovie} />
        <Stack.Screen name="NewPage" component={NewPage} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ApiTrendingData" component={ApiTrendingData} /> */}
        <Stack.Screen name="MovieScreen" component={MovieScreen} />
        <Stack.Screen name="MovieType" component={MovieType} />
        <Stack.Screen name="PopularMovie" component={PopularMovie} />
        <Stack.Screen name="TrendingMovie" component={TrendingMovie} />
        <Stack.Screen name="HotMovie" component={HotMovie} />
        <Stack.Screen name="RecommendedMovie" component={RecommendedMovie} />
        <Stack.Screen name="UpcomingMovie" component={UpcomingMovie} />

        <Stack.Screen
          name="MovieDetail"
          component={MovieDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Practive" component={Practive} />
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
