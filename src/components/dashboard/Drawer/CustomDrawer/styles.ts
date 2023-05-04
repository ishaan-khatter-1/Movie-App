import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';

const styles = StyleSheet.create({
  drawerHeader: {
    flex: 0.25,
    backgroundColor: ColorConstants.baseColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 20,
  },
  labelStyle: {
    fontSize: 18,
    marginLeft: '15%',
  },
});

export default styles;
