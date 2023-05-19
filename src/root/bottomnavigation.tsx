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

const Tab = createBottomTabNavigator();

const movie = 'M💿VIE  ';
const mania = 'MANIA';

const BottomNavigation = ({navigation}) => {
  return (
    <>
      <Tab.Navigator
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
        <Tab.Screen name="Home" component={Home} options={homeTab} />
        <Tab.Screen name="Movie" component={Movie} options={movieTab} />
        <Tab.Screen
          name="Television"
          component={Television}
          options={televisionTab}
        />
      </Tab.Navigator>
    </>
  );
};

const homeTab = {
  tabBarIcon: ({focused}) => (
    <View>{focused ? <HomeIcon /> : <HomeIconFaded />}</View>
  ),
  tabBarLabel: 'Home',
};
const movieTab = {
  tabBarIcon: ({focused}) => (
    <View>{focused ? <MovieIcon /> : <MovieIconFaded />}</View>
  ),
  tabBarLabel: 'Find Movies',
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
  tabBarLabel: 'Find TV Shows',
};

const tabBarStyling = {
  backgroundColor: ColorConstants.backgroundWhite,
  height: 60,
  borderTopWidth: 0,
  borderWidth: 0,
};

export default BottomNavigation;
