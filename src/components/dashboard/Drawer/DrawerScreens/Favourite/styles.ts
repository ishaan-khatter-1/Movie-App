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
  imageStyle: {width: 130, height: 195},
  favTitleView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  favTitle: {
    color: '#000',
    fontSize: 22,
    marginBottom: 20,
    fontFamily: fonts.BOLD,
  },
  titleTextView: {marginHorizontal: 10, flex: 1},
  titleText: {fontWeight: '800', color: 'black'},
  overviewText: {marginVertical: 5, height: 130},
  removeText: {fontWeight: '700'},
});

export default styles;
