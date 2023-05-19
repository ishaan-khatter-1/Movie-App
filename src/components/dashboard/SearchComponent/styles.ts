import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
import fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    marginHorizontal: 15,
    width: width * 0.7,

    color: ColorConstants.baseColor,
    fontFamily: fonts.BOLD,
  },
  search: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 15,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#000',
    opacity: 0.5,
  },
  imgStyle: {},
  flatListstyle: {
    marginHorizontal: 10,
  },
  imageStyle: {
    borderRadius: 5,
    width: 150,
    height: 225,
    alignSelf: 'center',
  },
});
export default styles;
