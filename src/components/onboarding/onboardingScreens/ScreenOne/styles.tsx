import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
import fonts from '../../../../assets/fonts';

const styleOne = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.mainBgColor,
  },
  containerTwo: {
    marginTop: '25%',
    flex: 0.8,
    justifyContent: 'space-between',
  },
  textView: {
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '4%',
    marginLeft: '3%',
  },
  textstyle: {
    color: ColorConstants.textWhite,
    fontFamily: fonts.SEMIBOLD,
    fontSize: 22,
  },
  imgView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 100,

    padding: '15%',
  },
  img: {
    width: 300,
    height: 230,
    borderRadius: 5,
  },
  skipbtn: {
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

export default styleOne;
