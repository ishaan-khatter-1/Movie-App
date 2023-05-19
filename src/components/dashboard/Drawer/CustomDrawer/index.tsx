import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Settings from '../DrawerScreens/Settings';
import styles from './styles';
import FavouriteIcon from '../../../../assets/svgIcons/favourite';
import AboutIcon from '../../../../assets/svgIcons/aboutUs';
import ColorConstants from '../../../../assets/colorConstants';
import StringConstants from '../../../../assets/stringConstants';

const CustomDrawer = () => {
  const Navigation = useNavigation();
  const drawerScreenNavigate = Screen => {
    Navigation.navigate(Screen);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>
          {StringConstants.AppNameFirstLetter}
        </Text>
        <Text style={styles.drawerHeaderText2}>
          {StringConstants.AppNameSecondLetter}
        </Text>
      </View>
      <DrawerContentScrollView>
        <View>
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate('Favourite');
            }}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <FavouriteIcon
              width={30}
              height={30}
              fill={ColorConstants.mainBgColor}
              marginHorizontal={15}
              marginRight={20}
              marginVertical={10}
            />
            <Text style={styles.labelStyle}>Favourites</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate('About');
            }}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <AboutIcon
              width={30}
              height={30}
              fill={ColorConstants.mainBgColor}
              marginHorizontal={15}
              marginRight={20}
              marginVertical={10}
            />
            <Text style={styles.labelStyle}>About</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
