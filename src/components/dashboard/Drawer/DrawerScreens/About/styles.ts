import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../../assets/colorConstants';
import fonts from '../../../../../assets/fonts';

const styles = StyleSheet.create({
  aboutTitle: {
    color: ColorConstants.textBlack,
    fontSize: 22,
    marginBottom: 20,
    marginTop: 10,
    fontFamily: fonts.BOLD,
  },
  aboutText: {
    color: ColorConstants.textBlack,
    marginHorizontal: 20,
    fontSize: 16,
    fontFamily: fonts.SEMIBOLD,
  },
});

export default styles;
