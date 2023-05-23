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
    marginTop: 17,
    marginLeft: 5,
  },
  HeaderView: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 300,
    justifyContent: 'center',
  },
  movieName: {
    color: ColorConstants.textWhite,
    fontSize: 20,
    fontFamily: fonts.BOLD,
  },
});

export default styles;
