import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
import fonts from '../../../../assets/fonts';

const styleThree = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: ColorConstants.mainBgColor,
  },
  mainContainer2: {
    flex: 0.8,
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',
  },
  textHeaderView: {
    flexDirection: 'row',
    marginTop: '9%',
  },
  textHeader: {
    fontSize: 26,
    color: ColorConstants.textWhite,
    fontFamily: fonts.BOLD,
  },
  textHeader2: {
    color: ColorConstants.thirdOrange,
  },
  thirdScreenContent: {
    fontFamily: fonts.SEMIBOLD,
    color: ColorConstants.textWhite,
    fontSize: 17,
    marginTop: '7%',
  },
  lottieStyleView: {
    alignItems: 'center',

    flex: 1,
  },
  lottieStyle: {
    width: 300,
    height: 360,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  skipSymbol: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  skipbtn: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 5,
  },

  btnAbovText: {
    fontSize: 25,
    marginRight: '0%',
    color: ColorConstants.pinkmain,
    fontWeight: '600',
  },
});
export default styleThree;
