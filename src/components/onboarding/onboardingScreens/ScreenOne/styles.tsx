import {StyleSheet} from 'react-native';

const styleOne = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#rgb(34,0,70)',
  },
  containerTwo: {
    marginTop: '25%',
    flex: 0.8,
    justifyContent: 'space-between',
  },
  textView: {
    // marginTop: '30%',
    height: '18%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: '4%',
    marginLeft: '3%',
  },
  textstyle: {
    color: 'white',
    fontSize: 20,
  },
  imgView: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    // marginTop: '50%',
    elevation: 100,
    borderColor: 'grey',
    // backgroundColor: 'red',
    resizeMode: 'stretch',
    // width: 'img',
    width: 260,
    marginLeft: '5%',
    // marginVertical: '5%',
  },
  img: {
    width: 260,
    height: 180,
    borderRadius: 40,
  },
  skipbtn: {
    // backgroundColor: 'red',
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

export default styleOne;
