import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Settings from '../DrawerScreens/Settings';
import styles from './styles';
import SettingIcon from '../../../../assets/svgIcons/settingsIcon';
import AboutIcon from '../../../../assets/svgIcons/aboutUs';
import ColorConstants from '../../../../assets/colorConstants';

const CustomDrawer = () => {
  const Navigation = useNavigation();
  const drawerScreenNavigate = Screen => {
    Navigation.navigate(Screen);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>M💿VIE </Text>
        <Text style={styles.drawerHeaderText2}>MANIA </Text>
      </View>
      <DrawerContentScrollView>
        <View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <SettingIcon
              width={30}
              height={30}
              fill={ColorConstants.mainBgColor}
              marginHorizontal={15}
              marginRight={20}
              marginVertical={10}
            />
            <Text style={{fontWeight: 700, color: '#000'}}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <AboutIcon
              width={30}
              height={30}
              fill={ColorConstants.mainBgColor}
              marginHorizontal={15}
              marginRight={20}
              marginVertical={10}
            />
            <Text style={{fontWeight: 700, color: '#000'}}>About</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
