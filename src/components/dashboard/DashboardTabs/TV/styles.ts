// import {Dimensions, StyleSheet} from 'react-native';
// import ColorConstants from '../../../assets/colorConstants';
// const width = Dimensions.get('window').width;

import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';

// const styles = StyleSheet.create({
//   headerText: {
//     fontSize: 20,
//     marginHorizontal: 15,
//     width: width * 0.7,
//     // backgroundColor: 'red',
//     fontWeight: '700',
//     color: ColorConstants.baseColor,
//   },
//   search: {
//     paddingHorizontal: 15,
//     paddingVertical: 5,
//     margin: 15,
//     borderWidth: 1,
//     borderRadius: 25,
//     borderColor: '#000',
//     opacity: 0.5,
//   },
//   imgStyle: {},
//   flatListstyle: {
//     marginHorizontal: 10,
//     marginBottom: 80,

//     // backgroundColor: 'red',
//   },
//   imageStyle: {
//     borderRadius: 10,
//     width: 150,
//     height: 225,
//     alignSelf: 'center',
//   },
// });
// export default styles;

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: ColorConstants.backgroundWhite,
    backgroundColor: 'yellow',

    flex: 1,
  },
  SearchComponentStyle: {
    backgroundColor: 'red',
  },
  flatListstyle: {
    marginHorizontal: 10,
    // marginBottom: 80,

    // backgroundColor: 'red',
  },
  imageStyle: {
    borderRadius: 10,
    width: 150,
    height: 225,
    alignSelf: 'center',
  },
});
export default styles;