import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Settings from '../DrawerScreens/Settings';
import styles from './styles';
import SettingIcon from '../../../../assets/svgIcons/settingsIcon';
import AboutIcon from '../../../../assets/svgIcons/aboutUs';
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
        <Text style={styles.drawerHeaderText}>MANIA </Text>
      </View>
      <DrawerContentScrollView>
        {/* <View>
          <TouchableOpacity>
            <Text>Profile</Text>

          </TouchableOpacity>
        </View> */}
        <View>
          <TouchableOpacity>
            {/* <Text>Settings</Text> */}
            {/* <DrawerItem
              label={'Settings'}
              labelStyle={styles.labelStyle}
              onPress={() => drawerScreenNavigate('Settings')}
              // icon={({propsp}) => console.log(propsp)}
              icon={() => <SettingIcon />}
            /> */}
          </TouchableOpacity>
          <SettingIcon width={20} height={20} fill={'#CCC'} />
        </View>
        <View>
          <TouchableOpacity>
            <View style={{backgroundColor: 'red'}}>
              <DrawerItem
                label={'About'}
                labelStyle={styles.labelStyle}
                onPress={() => drawerScreenNavigate('About')}
                icon={() => <AboutIcon style={{margin: 0, padding: 0}} />}
              />
            </View>
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
