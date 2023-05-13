import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
// export const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorConstants.backgroundWhite,
    flex: 1,
  },
  container: {},
  carouselViewZero: {
    alignItems: 'center',
    marginTop: 20,
  },
  imgOneStyleZero: {
    aspectRatio: 5 / 3, // width / height

    borderRadius: 10,

    width: '100%',
  },
  imageStyleZero: {
    borderRadius: 20,
    shadowColor: 'red',
  },
  trendingTextColor: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: '500',
  },
  imgOneStyle: {
    aspectRatio: 1 / 1.5,
    borderRadius: 20,
  },
  imageStyle: {
    aspectRatio: 1 / 1.5,
    borderRadius: 20,
  },
  titleStyle: {
    fontSize: 14,
    color: '#fff',
  },
  carouselView: {
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: Dimensions.get('window').width * 0.1,
  },
  renderView: {
    marginHorizontal: 8,
    borderRadius: 20,
  },
  carousel: {
    borderRadius: 20,
    borderWidth: 10,
  },
});

export default styles;
