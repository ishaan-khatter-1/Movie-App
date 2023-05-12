import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Settings from '../DrawerScreens/Settings';
import styles from './styles';
import SettingIcon from '../../../../assets/svgIcons/settingsIcon';
import AboutIcon from '../../../../assets/svgIcons/aboutUs';
import ColorConstants from '../../../../assets/colorConstants';
// import styles from './styles';

const CustomDrawer = () => {
  const Navigation = useNavigation();
  const drawerScreenNavigate = Screen => {
    Navigation.navigate(Screen);
  };
  // console.log(props);

  return (
    <View style={{flex: 1}}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>M💿VIE </Text>
        <Text style={styles.drawerHeaderText2}>MANIA </Text>
      </View>
      <DrawerContentScrollView>
        {/* <View>
          <TouchableOpacity>
            <Text>Profile</Text>

          </TouchableOpacity>
        </View> */}
        <View>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* <Text>Settings</Text> */}
            {/* <DrawerItem
              label={'Settings'}
              labelStyle={styles.labelStyle}
              onPress={() => drawerScreenNavigate('Settings')}
              // icon={({propsp}) => console.log(propsp)}
              icon={() => <SettingIcon />}
            /> */}
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
            {/* <View style={{backgroundColor: 'red'}}></View> */}
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

{
  /* <DrawerItem
              label="Profile"
              onPress={function (): void {
                throw new Error('Function not implemented.');
              }}
            /> */
}

{
  /* <DrawerItem
                label={'About'}
                labelStyle={styles.labelStyle}
                onPress={() => drawerScreenNavigate('About')}
                icon={() => <AboutIcon style={{margin: 0, padding: 0}} />}
              /> */
}
