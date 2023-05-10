import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'green',
    alignSelf: 'center',
    padding: 0,
  },
  imgStyle: {
    width: '100%',
    // height: '100%',
    aspectRatio: 3 / 2,
    // marginVertical: 0,
  },
  imageStyle: {
    // width: '100%',
  },
  rating_titleView: {
    // backgroundColor: 'yellow',
    margin: 10,
    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // justifyContent: 'space-between',
  },
  original_titleText: {
    color: 'black',
    fontSize: 24,
    marginRight: '5%',
    fontWeight: '700',
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '16%',
    justifyContent: 'space-between',
    // backgroundColor: 'red',s
  },
  // starIconView: {
  //   justifyContent: 'center',

  //   height: 30,
  // },
  ratingTextView: {
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    height: 30,
    marginLeft: '2%',
  },
  ratingText: {
    fontSize: 18,
    fontWeight: '500',
  },
  ReleaseDateView: {
    marginLeft: 15,
    marginTop: 5,
  },
  releaseDateText: {
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
  },
  overviewTextView: {
    margin: 15,
    width: '100%',
  },
  overviewText: {
    // margin: 15,
    color: 'black',
    fontWeight: '500',
  },
  moreHeadTxt: {
    marginHorizontal: 15,
    marginBottom: 12,
    color: 'black',
    fontWeight: '600',
    fontSize: 22,
  },
  flatlistImgText: {
    width: 200,
    // height: 200,
    aspectRatio: 3 / 2.2,
    marginHorizontal: 10,
    // backgroundColor: 'red',
    // borderRadius: 40,
  },
  flatlistImgViewText: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  flatListText: {
    // backgroundColor: 'red',
    color: '#fff',
    fontWeight: '700',
    margin: '4%',
  },
});
export default styles;
