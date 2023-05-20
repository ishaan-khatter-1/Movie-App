import {StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
import fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
  btnView: {
    marginRight: '2%',
  },
  skipTextView: {
    borderRadius: 30,
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: ColorConstants.backgroundWhite,
    marginRight: '3%',
  },
  skipbtntext: {
    fontSize: 20,
    // fontWeight: 'bold',
    fontFamily: fonts.SEMIBOLD,
    color: ColorConstants.mainBgColor,
  },
});
export default styles;
