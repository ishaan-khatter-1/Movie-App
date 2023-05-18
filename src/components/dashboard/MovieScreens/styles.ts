import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
// export const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorConstants.backgroundWhite,
    flex: 1,
    paddingTop: '5%',
    // paddingBottom: '1%',
    // justifyContent: 'space-between',
  },
  // container: {},

  imgFlatlistStyle: {
    aspectRatio: 1 / 1.5, // width / height
    // height: 150,
    width: 150,
    marginBottom: 10,
    marginHorizontal: 8,
  },
  // imageStyleZero: {
  //   borderRadius: 10,
  //   shadowColor: 'red',
  // },
  typeTextColor: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: '500',
  },
  imgCarouselStyle: {
    aspectRatio: 1.5 / 1,
    borderRadius: 20,
  },
  imageStyle: {
    borderRadius: 5,
  },
  // titleStyle: {
  //   fontSize: 14,
  //   color: '#fff',
  // },
  FlatlistView: {
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
    // marginHorizontal: Dimensions.get('window').width * 0.1,
    // backgroundColor: 'red',
  },
  // renderView: {
  //   // marginHorizontal: 8,
  //   borderRadius: 20,
  // },
  // carousel: {
  //   borderRadius: 20,
  //   borderWidth: 10,
  // },
});

export default styles;
