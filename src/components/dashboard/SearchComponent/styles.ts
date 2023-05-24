import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
import fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    backgroundColor: ColorConstants.backgroundWhite,
    flex: 1,
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
  noResultView: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultText: {
    color: ColorConstants.textBlack,
    fontSize: 22,
    fontFamily: fonts.BOLD,
  },
  flatListstyle: {
    alignSelf: 'center',
  },
  imageStyle: {
    borderRadius: 30,
    width: 180,
    height: 225,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
export default styles;
