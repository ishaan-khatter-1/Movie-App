import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
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
    width: 100,
    alignItems: 'center',
  },
  btnTwo: {
    padding: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width: 100,
    alignItems: 'center',
  },
  btnTextStyle: {
    fontSize: 15,
    fontWeight: '600',
  },
  componentHeaderText: {
    color: ColorConstants.mainBgColor,
    fontSize: 16,
    marginHorizontal: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: '600',
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
//
//
//
//

// import {Dimensions, StyleSheet} from 'react-native';
// import ColorConstants from '../../../assets/colorConstants';
// // export const width = Dimensions.get('screen').width;

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: ColorConstants.backgroundWhite,
//     flex: 1,
//   },
//   container: {},
//   carouselViewZero: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   imgOneStyleZero: {
//     aspectRatio: 5 / 3, // width / height

//     borderRadius: 10,

//     width: '100%',
//   },
//   imageStyleZero: {
//     borderRadius: 20,
//     shadowColor: 'red',
//   },
//   trendingTextColor: {
//     color: '#000',
//     fontSize: 20,
//     marginLeft: 10,
//     marginBottom: 10,
//     marginTop: 20,
//     fontWeight: '500',
//   },
//   imgOneStyle: {
//     aspectRatio: 1 / 1.5,
//     borderRadius: 20,
//   },
//   imageStyle: {
//     aspectRatio: 1 / 1.5,
//     borderRadius: 20,
//   },
//   titleStyle: {
//     fontSize: 14,
//     color: '#fff',
//   },
//   carouselView: {
//     alignItems: 'center',
//     borderRadius: 20,
//     marginHorizontal: Dimensions.get('window').width * 0.1,
//   },
//   renderView: {
//     marginHorizontal: 8,
//     borderRadius: 20,
//   },
//   carousel: {
//     borderRadius: 20,
//     borderWidth: 10,
//   },
// });

// export default styles;
