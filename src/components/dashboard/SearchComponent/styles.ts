import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
import fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    marginHorizontal: 18,
    width: width,

    color: ColorConstants.baseColor,
    fontFamily: fonts.BOLD,
    // alignSelf: 'center',
  },
  search: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 15,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: ColorConstants.backgorundBlack,
    opacity: 1,
    color: ColorConstants.textBlack,
    fontSize: 14,
    fontWeight: '500',
  },
  imgStyle: {},
  flatListstyle: {
    // marginHorizontal: 10,
    alignSelf: 'center',
    // marginBottom: 100,
    // flex: 1,
  },
  imageStyle: {
    borderRadius: 30,
    width: 180,
    height: 225,
    alignSelf: 'center',
    marginVertical: 10,

    // margin: 10,
    // backgroundColor: 'green',
  },
});
export default styles;
