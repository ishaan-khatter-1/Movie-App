import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../../assets/colorConstants';
import fonts from '../../../../../assets/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: ColorConstants.backgroundWhite,
  },
  aboutText: {
    color: ColorConstants.textBlack,
    marginHorizontal: 20,
    fontSize: 16,
    fontFamily: fonts.SEMIBOLD,
    paddingTop: 20,
  },
});

export default styles;
