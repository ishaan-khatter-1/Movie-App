import {View, Text, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/dashboard/DashboardTabs/Home';
import Movie from '../components/dashboard/DashboardTabs/Movie';
import Television from '../components/dashboard/DashboardTabs/TV';
import ColorConstants from '../assets/colorConstants';
import Drawer from '../assets/dashboardStyles/Drawer';
import HomeIcon from '../assets/dashboardStyles/TabStyles/HomeIcon';
import MovieIcon from '../assets/dashboardStyles/TabStyles/MovieIcon';
import MovieIconFaded from '../assets/dashboardStyles/TabStyles/MovieIconFaded';
import TelevisionIcon from '../assets/dashboardStyles/TabStyles/TelevisionIcon';
import HomeIconFaded from '../assets/dashboardStyles/TabStyles/HomeIconFaded';
import TelevisionIconFaded from '../assets/dashboardStyles/TabStyles/TelevisionIconFaded';
import fonts from '../assets/fonts';
import StringConstants from '../assets/stringConstants';
import routes from '../assets/routes';

const Tab = createBottomTabNavigator();

const movie = StringConstants.AppNameFirstLetter;
const mania = StringConstants.AppNameSecondLetter;

const BottomNavigation = ({navigation}) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: ({}) => (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: ColorConstants.textWhite,
                  fontSize: 20,
                  fontFamily: fonts.BOLD,
                }}>
                {StringConstants.AppNameFirstLetter}
              </Text>
              <Text
                style={{
                  color: ColorConstants.thirdOrange,
                  fontSize: 20,
                  fontFamily: fonts.BOLD,
                }}>
                {StringConstants.AppNameSecondLetter}
              </Text>
            </View>
          ),
          headerTitleAlign: 'center',
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

          headerStyle: {backgroundColor: ColorConstants.mainBgColor},
          headerTitleStyle: {color: ColorConstants.textWhite},
          tabBarStyle: {...tabBarStyling},
          // tabBarShowLabel: false,
          // tabBarLabel:
        }}>
        <Tab.Screen
          name={routes.root.DrawerNavigation.BottomNavigation.Home.path}
          component={Home}
          options={homeTab}
        />
        <Tab.Screen
          name={routes.root.DrawerNavigation.BottomNavigation.Movie.path}
          component={Movie}
          options={movieTab}
        />
        <Tab.Screen
          name={routes.root.DrawerNavigation.BottomNavigation.Television.path}
          component={Television}
          options={televisionTab}
        />
      </Tab.Navigator>
    </>
  );
};

const tabBarLabelStyle = {
  fontFamily: fonts.BOLD,
  fontSize: 14,
  marginBottom: 3,
};

const homeTab = {
  tabBarIcon: ({focused}) => (
    <View>
      {focused ? <HomeIcon width={35} height={35} /> : <HomeIconFaded />}
    </View>
  ),
  tabBarLabel: 'Home',
  tabBarLabelStyle: {...tabBarLabelStyle},

  tabBarActiveTintColor: ColorConstants.mainBgColor,
};
const movieTab = {
  tabBarIcon: ({focused}) => (
    <View>
      {focused ? (
        <MovieIcon width={35} height={35} />
      ) : (
        <MovieIconFaded width={35} height={35} />
      )}
    </View>
  ),
  tabBarLabel: 'Movies',
  tabBarLabelStyle: {
    ...tabBarLabelStyle,
  },
  tabBarActiveTintColor: ColorConstants.mainBgColor,
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
  tabBarLabel: 'TV Shows',
  tabBarLabelStyle: {...tabBarLabelStyle},
  tabBarActiveTintColor: ColorConstants.mainBgColor,
};

const tabBarStyling = {
  backgroundColor: ColorConstants.backgroundWhite,
  height: 65,
  paddingTop: 7,
};

export default BottomNavigation;
