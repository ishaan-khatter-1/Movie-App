import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
import fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorConstants.backgroundWhite,
    flex: 1,
  },

  imgFlatlistStyle: {
    width: 170,
    height: 235,
    marginBottom: 10,
    borderRadius: 20,
  },

  typeTextColor: {
    color: ColorConstants.textBlack,
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
    fontFamily: fonts.BOLD,
  },

  FlatListStyle: {
    alignSelf: 'center',
  },
  FlatlistView: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default styles;
