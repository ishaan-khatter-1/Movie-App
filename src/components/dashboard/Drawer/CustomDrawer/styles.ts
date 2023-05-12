import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';

const styles = StyleSheet.create({
  drawerHeader: {
    flex: 0.25,
    backgroundColor: ColorConstants.mainBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 20,
  },
  drawerHeaderText2: {
    color: ColorConstants.thirdOrange,
    fontSize: 20,
    fontWeight: 600,
  },
  labelStyle: {
    fontSize: 18,
    marginLeft: '15%',
  },
});

export default styles;
