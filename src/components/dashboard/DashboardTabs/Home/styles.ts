import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
import fonts from '../../../../assets/fonts';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 5,
    backgroundColor: ColorConstants.backgroundWhite,
  },
  imgStyle: {
    borderRadius: 10,
    width: '100%',
    // height: ,
    height: (width * 1) / 1.7,
    alignSelf: 'center',
    // margin: 20,
  },
  btnViewstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  btnOne: {
    padding: 15,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTwo: {
    padding: 15,

    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: fonts.BOLD,
  },
  componentHeaderText: {
    color: ColorConstants.mainBgColor,
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: '600',
    fontStyle: fonts.SEMIBOLD,
  },
  MovieTvImg: {
    width: 135,
    height: 135 * 1.5,

    // marginLeft: 10,
    marginVertical: 10,
    marginHorizontal: 8,
    // backgroundColor: 'green',
  },
  MovieTvImageStyle: {
    borderRadius: 5,
  },
  movieTvtitleText: {
    width: 180,
    marginLeft: 15,
    fontSize: 12,
    // fontWeight: '600',
    color: 'black',
  },
});
export default styles;
