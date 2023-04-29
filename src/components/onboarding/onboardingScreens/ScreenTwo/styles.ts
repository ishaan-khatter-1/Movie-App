import {StyleSheet} from 'react-native';

const styleTwo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(34,0,70)',
  },
  containerOne: {
    justifyContent: 'space-between',
    flex: 0.85,
    marginTop: '12%',
    paddingTop: '5%',
  },
  containerTwo: {
    marginTop: '15%',
  },
  textView: {
    // marginTop: '30%',
    height: '10%',

    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginRight: '4%',
    // marginLeft: '3%',
    // paddingBottom: '20',
  },
  textView2: {
    marginHorizontal: '5%',
  },
  textstyle: {
    color: 'white',
    fontSize: 16,
  },
  imgView: {
    // justifyContent: 'center',
    alignItems: 'center',
    elevation: 100,
    // borderColor: 'grey',
    // backgroundColor: 'red',
  },
  img1View: {
    width: '100%',
    // backgroundColor: 'red',
    marginBottom: 60,
    alignItems: 'flex-start',
    marginLeft: '12%',
  },
  imgView2Motiview: {
    elevation: 100,
    alignItems: 'center',
  },
  img2View: {
    width: '100%',
    marginBottom: 10,
    alignItems: 'flex-end',
    marginRight: '12%',

    // backgroundColor: 'red',
  },
  img: {
    width: 200,
    height: 130,
    borderRadius: 40,
  },
  skipbtn: {
    // backgroundColor: 'red',
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

export default styleTwo;
