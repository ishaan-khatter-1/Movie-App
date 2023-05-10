import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    // alignSelf: 'center',
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
    // position: 'absolute',
    alignSelf: 'flex-start',
    // backgroundColor: 'green',
  },
  pressableSymbol: {
    // color: 'white',
    // fontSize: 20,
    // margin: 5,
    // fontWeight: '900',
    // borderRadius: 50,
    // borderColor: '#fff',
    // borderWidth: 2,
    // // backgroundColor: 'yellow',
    // paddingHorizontal: 10,
    margin: 10,
  },
  rating_titleView: {
    marginLeft: 15,
    marginTop: 10,
    // marginLeft: 10,
    // alignItems: 'center',
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
  ratingView: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '2%',
    // backgroundColor: 'yellow',
  },

  ratingTextView: {},
  ratingText: {
    fontWeight: '500',
    // flexWrap: 'wrap',
    marginLeft: 5,
  },
  ReleaseDateView: {
    marginLeft: 15,
    marginTop: 15,
  },
  releaseDateText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
    flexWrap: 'wrap',
    // backgroundColor: 'red',
  },

  overviewText: {
    margin: 15,
    // backgroundColor: 'red',

    color: 'black',
    fontWeight: '500',
    flexWrap: 'wrap',
  },
  moreHeadTxt: {
    marginHorizontal: 10,
    // marginVertical: 12,
    marginBottom: 7,
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
  },
  flatlistImgText: {
    width: 200,
    aspectRatio: 3 / 2.2,
    marginHorizontal: 10,
  },
  flatlistImgViewText: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  flatListText: {
    color: '#fff',
    fontWeight: '700',
    margin: '4%',
  },
});
export default styles;
