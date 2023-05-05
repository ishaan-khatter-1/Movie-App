import {View, Text} from 'react-native';
import React from 'react';
import {BASE_URL, SEARCH_URL} from '../../../services';
import axios from 'axios';

interface Apiface {
  remainURL?: any;
  returnDATA?: any;
  fetchApi?(remainURL: any, returnDATA: any): any;
}

const Fetch = ({fetchApi}: Apiface) => {
  fetchApi(remaimURL, returnDATA){
    const apiRes = await axios.get(BASE_URL + {remainURL});
  return {returnDATA};
  };
};

const fetchApi = async ({remainURL, returnDATA}: apiface) => {
  const apiRes = await axios.get(BASE_URL + {remainURL});
  return {returnDATA};
};

const ApiFetch = () => {
  const fetchApi = async ({remainURL, returnDATA}: apiface) => {
    const apiRes = await axios.get(BASE_URL + {remainURL});
    return {returnDATA};
  };
  s;
  return (
    <View>
      <Text>ApiFetch</Text>
    </View>
  );
};

export default ApiFetch;
