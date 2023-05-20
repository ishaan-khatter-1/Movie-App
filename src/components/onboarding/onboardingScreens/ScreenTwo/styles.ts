import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
import fonts from '../../../../assets/fonts';

const styleTwo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.mainBgColor,
  },
  containerOne: {
    justifyContent: 'space-between',
    flex: 0.85,
    marginTop: '12%',
    paddingTop: '5%',
  },
  containerTwo: {
    marginTop: '15%',
  },
  textView: {
    height: '10%',

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textView2: {
    marginHorizontal: '5%',
  },
  textstyle: {
    color: ColorConstants.textWhite,
    fontSize: 18,
    fontFamily: fonts.SEMIBOLD,
  },
  imgView: {
    alignItems: 'center',
    elevation: 100,
  },
  img1View: {
    width: '100%',
    marginBottom: 40,
    alignItems: 'flex-start',
    marginLeft: '12%',
  },
  imgView2Motiview: {
    elevation: 100,
    alignItems: 'center',
  },
  img2View: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'flex-end',
    marginRight: '12%',
  },
  img: {
    width: 230,
    height: 150,
    borderRadius: 5,
  },
  skipbtn: {
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

export default styleTwo;
