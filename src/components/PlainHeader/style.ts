import {StyleSheet} from 'react-native';
import ColorConstants from '../../assets/colorConstants';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: ColorConstants.mainBgColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  pressableBack: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 5,
    left: 0,
  },
  pressableSymbol: {
    margin: 10,
  },
});

export default styles;
