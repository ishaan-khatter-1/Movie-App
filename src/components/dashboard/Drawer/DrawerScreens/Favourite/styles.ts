import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../../assets/colorConstants';
import fonts from '../../../../../assets/fonts';

const styles = StyleSheet.create({
  mainFavView: {
    flexDirection: 'row',
    margin: 10,
    // borderWidth: 5,
    // padding: 10,
  },
  imageStyle: {width: 130, height: 195},
  favTitleView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  favTitle: {
    color: '#000',
    fontSize: 22,
    marginBottom: 20,
    fontFamily: fonts.BOLD,
  },
  titleTextView: {
    marginHorizontal: 10,
    height: 195,
    flex: 1,
    paddingBottom: 10,
    // backgroundColor: 'red',
  },
  titleText: {
    fontSize: 16,
    color: ColorConstants.textBlack,
    fontFamily: fonts.BOLD,
  },
  overviewText: {
    marginVertical: 5,
    height: 115,
    fontFamily: fonts.REGULAR,
    fontSize: 13,
    color: ColorConstants.baseColor,
  },
  removeBtn: {
    padding: 5,
    position: 'absolute',
    bottom: 0,
  },
  removeText: {
    fontFamily: fonts.SEMIBOLD,
    fontSize: 13,
    color: ColorConstants.textRed,
  },
  noFavView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  noFavText: {
    fontFamily: fonts.BOLD,
    fontSize: 22,
  },
});

export default styles;
