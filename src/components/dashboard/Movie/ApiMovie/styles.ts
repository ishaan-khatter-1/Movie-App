import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../../assets/colorConstants';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  imgOneStyle: {
    // width:
    aspectRatio: 1 / 1.5,
    marginHorizontal: 10,
    width: width * 0.4,
    marginBottom: 20,
  },
  imageStyle: {
    borderRadius: 10,
    // marginBottom: 20,

    // height: 500,
  },
});

export default styles;
