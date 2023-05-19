import {Dimensions, StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';
import fonts from '../../../assets/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorConstants.backgroundWhite,
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: ColorConstants.mainBgColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginBottom: 10,
  },
  pressableBack: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 5,
    left: 0,
  },
  pressableSymbol: {
    margin: 10,
  },
  imgFlatlistStyle: {
    aspectRatio: 1 / 1.5, // width / height
    width: 150,
    marginBottom: 10,
    marginHorizontal: 8,
  },

  typeTextColor: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: '500',
    fontFamily: fonts.BOLD,
  },
  imgCarouselStyle: {
    aspectRatio: 1.5 / 1,
    borderRadius: 20,
  },
  imageStyle: {
    borderRadius: 5,
  },
  FlatlistView: {
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 20,
  },
});

export default styles;
