import {StyleSheet} from 'react-native';
import ColorConstants from '../../../assets/colorConstants';

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: ColorConstants.mainBgColor,
    backgroundColor: ColorConstants.backgroundWhite,

    // flex: 2,
    // justifyContent: 'space-between',
    flex: 1,
  },
  trendingTextColor: {
    color: '#000',
    fontSize: 22,
    margin: 10,
    fontWeight: '500',
  },
  apiTrendingImg: {
    // backgroundColor: 'green',
    // flex: 0.5,
    // marginBottom: '15%',
    borderRadius: 20,
  },
  UpcomingMovieImages: {
    // backgroundColor: 'yellow',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
});

export default styles;
