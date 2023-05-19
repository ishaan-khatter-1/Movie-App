import {StyleSheet} from 'react-native';
import ColorConstants from '../../../../../assets/colorConstants';
import fonts from '../../../../../assets/fonts';

const styles = StyleSheet.create({
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
  aboutTitle: {
    color: '#000',
    fontSize: 22,
    marginBottom: 20,
    fontFamily: fonts.BOLD,
  },
  aboutText: {
    color: '#000',
    marginHorizontal: 20,
    fontSize: 16,
    fontFamily: fonts.SEMIBOLD,
  },
});

export default styles;
