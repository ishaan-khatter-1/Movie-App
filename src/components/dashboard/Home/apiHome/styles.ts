import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
// export const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mainContainer: {},
  container: {},
  imgOneStyle: {
    aspectRatio: 1 / 1.5,
    borderRadius: 20,
    // elevation: 30,
  },
  imageStyle: {
    aspectRatio: 1 / 1.5,
    borderRadius: 20,
    // shadowColor: 'red',
    // shadowOffset: {
    //   width: 10,
    //   height: 10,
    // },
  },
  titleStyle: {
    fontSize: 14,
    color: '#fff',
  },
  carouselView: {
    // backgroundColor: ColorConstants.baseColor,
    // backgroundColor: 'green',

    // alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: Dimensions.get('window').width * 0.1,
    // elevation: 20,
    // shadowColor: 'rgb(45, 4, 61)',
    // borderRad: 0,
    // borderBottomColor: 'rgb(3, 19, 37)',
  },
  renderView: {
    marginHorizontal: 8,
    borderRadius: 20,
  },
  carousel: {
    // backgroundColor: 'yellow',
    borderRadius: 20,
    borderWidth: 10,
    // elevation: 30,
    // shadowColor: 'rgb(45, 4, 61)',
  },
});

export default styles;
