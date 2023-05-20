import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
import fonts from '../../../../assets/fonts';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    // marginBottom: 5,
    backgroundColor: ColorConstants.backgroundWhite,
    flex: 1,
  },
  imgStyle: {
    borderRadius: 10,
    width: '100%',
    height: (width * 1) / 1.7,
    alignSelf: 'center',
  },
  btnViewstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  btnOne: {
    padding: 10,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTwo: {
    padding: 10,

    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: 18,
    fontFamily: fonts.BOLD,
  },
  componentHeaderText: {
    color: ColorConstants.mainBgColor,
    fontSize: 17,
    marginHorizontal: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontFamily: fonts.SEMIBOLD,
  },
  MovieTvImg: {
    width: 125,
    height: 125 * 1.5,

    marginVertical: 10,
    marginHorizontal: 8,
  },
  MovieTvImageStyle: {
    borderRadius: 5,
  },
});
export default styles;
