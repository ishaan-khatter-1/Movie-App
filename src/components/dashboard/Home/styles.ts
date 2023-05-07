import {StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: ColorConstants.mainBgColor,
    // flex: 2,
    justifyContent: 'space-between',
    flex: 1,
  },
  apiImg: {
    // backgroundColor: 'green',
    // flex: 0.5,
    // marginBottom: '15%',
    borderRadius: 20,
  },
  btnClickOne: {
    backgroundColor: 'yellow',
    flex: 0.5,
  },
});

export default styles;
