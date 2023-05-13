import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
// export const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorConstants.backgroundWhite,
  },
  container: {},
  carouselViewZero: {
    alignItems: 'center',
    marginTop: 20,
  },
  imgOneStyleZero: {
    aspectRatio: 5 / 3, // width / height
    // height: 300,

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
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: '500',
  },
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
