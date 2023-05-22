import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import FavouriteIcon from '../../../../assets/svgIcons/favourite';
import AboutIcon from '../../../../assets/svgIcons/aboutUs';
import ColorConstants from '../../../../assets/colorConstants';
import StringConstants from '../../../../assets/stringConstants';
import routes from '../../../../assets/routes';

const CustomDrawer = () => {
  const Navigation = useNavigation();

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
              Navigation.navigate(
                routes.dashboard.Drawer.DrawerScreens.Favourites.path,
              );
            }}
            style={styles.drawerItems}>
            <FavouriteIcon
              width={30}
              height={30}
              fill={ColorConstants.mainBgColor}
              marginHorizontal={15}
              marginRight={20}
              marginVertical={10}
            />
            <Text style={styles.labelStyle}>
              {StringConstants.drawerItemFavourite}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              Navigation.navigate(
                routes.dashboard.Drawer.DrawerScreens.About.path,
              );
            }}
            style={styles.drawerItems}>
            <AboutIcon
              width={30}
              height={30}
              fill={ColorConstants.mainBgColor}
              marginHorizontal={15}
              marginRight={20}
              marginVertical={10}
            />
            <Text style={styles.labelStyle}>
              {StringConstants.drawerItemAbout}
            </Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
