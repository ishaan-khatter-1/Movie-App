import {StyleSheet} from 'react-native';
import fonts from '../../../assets/fonts';
import ColorConstants from '../../../assets/colorConstants';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: ColorConstants.mainBgColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashMotiContainer: {
    alignItems: 'center',
  },

  movieManiaText: {
    flexDirection: 'row',
  },
  splashText: {
    color: ColorConstants.thirdOrange,
    fontSize: 30,
    fontFamily: fonts.BOLD,
  },
  lottieStyleView: {
    alignItems: 'center',
  },
  lottieStyle: {
    width: 270,
    height: 270,
  },
});

export default styles;
