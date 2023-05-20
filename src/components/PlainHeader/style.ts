import {StyleSheet} from 'react-native';
import ColorConstants from '../../assets/colorConstants';
import fonts from '../../assets/fonts';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: ColorConstants.mainBgColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  pressableBack: {
    alignSelf: 'flex-start',
    position: 'absolute',
    top: 5,
    left: 5,
  },
  pressableSymbol: {
    margin: 10,
  },
  movieName: {
    color: ColorConstants.textWhite,
    fontSize: 20,
    fontFamily: fonts.BOLD,
  },
  maniaName: {
    color: ColorConstants.thirdOrange,
    fontSize: 22,
    fontFamily: fonts.BOLD,
  },
});

export default styles;
