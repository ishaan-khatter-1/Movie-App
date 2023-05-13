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
});
export default styles;
