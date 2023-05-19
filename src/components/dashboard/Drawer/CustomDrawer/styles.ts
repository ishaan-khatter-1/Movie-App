import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
import fonts from '../../../../assets/fonts';

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
    fontWeight: '600',

    fontFamily: fonts.BOLD,
  },
  drawerHeaderText2: {
    color: ColorConstants.thirdOrange,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: fonts.BOLD,
  },
  labelStyle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
});

export default styles;
