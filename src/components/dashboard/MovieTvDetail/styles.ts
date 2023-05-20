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
    fontFamily: fonts.BOLD,
  },
  favIconTextView: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  favText: {marginLeft: 10, color: 'black'},
  moreHeadTxt: {
    marginHorizontal: 10,
    marginBottom: 7,
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
  },
  flatlistImgText: {
    width: 150,
    aspectRatio: 1 / 1.5,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  flatlistImgTextView: {
    flexDirection: 'row',
  },
  flatListTitleTextView: {flex: 1, height: 180, marginRight: 10},
  flatListTitleText: {
    color: ColorConstants.textBlack,
    fontSize: 17,
    fontFamily: fonts.BOLD,
  },
});
export default styles;
