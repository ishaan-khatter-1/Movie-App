import {Dimensions, StyleSheet} from 'react-native';
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
  imageStyle: {},
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
    color: 'black',
    fontSize: 16,
    marginRight: '5%',
    fontWeight: '700',
    flexWrap: 'wrap',
  },
  ratingView: {},

  ratingTextView: {},
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
    fontSize: 14,

    fontWeight: '500',
    color: 'black',
    flexWrap: 'wrap',
    flex: 1,
  },

  overviewText: {
    margin: 15,

    color: 'black',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
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
    // flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-start',
    flexDirection: 'row',
  },

  flatListTitleText: {
    color: '#000',
    fontWeight: '700',
  },
});
export default styles;
