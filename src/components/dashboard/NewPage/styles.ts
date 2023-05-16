import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imgStyle: {
    borderRadius: 10,
    width: '100%',
    // height: ,
    height: (width * 1) / 1.7,
    alignSelf: 'center',
    // margin: 20,
  },
  componentHeaderText: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: 600,
  },
  MovieTvImg: {
    width: 190,
    height: 120,
    marginLeft: 10,
    marginVertical: 5,
    // backgroundColor: 'green',
  },
  MovieTvImageStyle: {
    borderRadius: 10,
  },
  movieTvtitleText: {
    width: 150,
    marginLeft: 15,
    fontWeight: '600',
    color: 'black',
  },
});
export default styles;
