import {StyleSheet} from 'react-native';

const styleThree = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#rgb(34,0,70)',
  },
  mainContainer2: {
    flex: 0.8,
    // backgroundColor: 'red',
  },
  textView: {
    // height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '10%',

    // backgroundColor: 'red',
  },
  textHeaderView: {
    flexDirection: 'row',
    marginTop: '9%',
  },
  textHeader: {
    fontSize: 26,
    color: 'white',
    fontWeight: '800',
  },
  textHeader2: {
    color: 'rgb(225,0,146)',
  },
  lottieStyleView: {
    alignItems: 'center',
    // marginTop: 70,
    // backgroundColor: 'green',
    flex: 1,
  },
  lottieStyle: {
    width: 300,
    height: 360,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'blue',
  },
  thirdScreenContent: {
    color: '#fff',
    fontSize: 16,
    marginTop: '7%',
  },

  mainbtnView: {
    // marginLeft: '6%',
    // backgroundColor: 'yellow',
  },
  skipSymbol: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    flexDirection: 'row',
    height: 40,
  },
  skipbtn: {
    // backgroundColor: 'green',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  // motibtnView: {
  //   flexDirection: 'row',
  //   backgroundColor: 'yellow',
  // },
  btnAbovText: {
    color: '#fff',
    fontSize: 25,
    marginRight: '0%',
    color: 'rgb(225,0,146)',
    fontWeight: '600',
  },
});
export default styleThree;
