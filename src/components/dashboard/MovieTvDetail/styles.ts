import {Dimensions, StyleSheet} from 'react-native';
import fonts from '../../../assets/fonts';
import ColorConstants from '../../../assets/colorConstants';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.5,
    padding: 0,
    marginBottom: 5,
  },
  imgStyle: {
    width: '100%',
    aspectRatio: 3 / 2,
  },
  pressableBack: {
    alignSelf: 'flex-start',
  },
  pressableSymbol: {
    margin: 10,
  },
  rating_titleView: {
    marginLeft: 15,
    marginTop: 10,

    width: width * 0.9,
    flexDirection: 'row',
  },
  original_titleText: {
    color: ColorConstants.textBlack,
    fontSize: 18,
    marginRight: '5%',
    flexWrap: 'wrap',
    fontFamily: fonts.BOLD,
  },

  ratingText: {
    fontWeight: '500',
    marginLeft: 5,
  },
  ReleaseDateView: {
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',

    paddingRight: '5%',
  },
  releaseDateStyle: {
    marginLeft: 15,
    color: ColorConstants.textBlack,
  },
  releaseDateText: {
    fontSize: 16,

    fontWeight: '500',
    color: ColorConstants.textBlack,
    flexWrap: 'wrap',
    flex: 1,
    fontFamily: fonts.SEMIBOLD,
  },

  overviewText: {
    margin: 16,

    color: ColorConstants.textBlack,
    flexWrap: 'wrap',
    fontFamily: fonts.SEMIBOLD,
    fontSize: 16,
  },
  favIconTextView: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  favText: {marginLeft: 10, color: ColorConstants.textRed},
  favTextTwo: {marginLeft: 10, color: ColorConstants.pinkmain},

  moreHeadTxt: {
    marginHorizontal: 10,
    marginBottom: 7,
    color: ColorConstants.textBlack,
    fontFamily: fonts.BOLD,
    fontSize: 23,
  },
  flatlistImgText: {
    width: 150,
    aspectRatio: 1 / 1.5,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  flatlistImgTextView: {
    flexDirection: 'row',
  },
  flatListTitleTextView: {
    flex: 1,
    // width: '55%',
    height: 225,
    // height: 167,
    // height: '53%',
    // marginRight: 10,
    paddingBottom: 5,
    marginRight: 10,
    // whiteSpace: 'wrap',
    textOverflow: 'ellipsis',
    // alignItems: 'center',
    // justifyContent: 'center',
    overflow: 'hidden',
  },
  flatListTitleText: {
    color: ColorConstants.textBlack,
    fontSize: 17,
    fontFamily: fonts.BOLD,
  },
  flatListOverviewText: {
    color: ColorConstants.textBlack,
    marginTop: 5,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});
export default styles;
