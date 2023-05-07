import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
// export const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mainContainer: {},
  container: {},
  imgOneStyle: {
    aspectRatio: 5 / 3, // width / height

    borderRadius: 20,

    width: '100%',
  },
  imageStyle: {
    borderRadius: 20,
    shadowColor: 'red',
  },
  titleStyle: {
    fontSize: 14,
    color: '#fff',
  },
  carouselView: {
    alignItems: 'center',

    shadowColor: 'rgb(45, 4, 61)',
    borderBottomColor: 'rgb(3, 19, 37)',
  },
  renderView: {
    // backgroundColor: ColorConstants.baseColor,
  },
  carousel: {},
});

export default styles;
