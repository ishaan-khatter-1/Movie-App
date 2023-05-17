import {View, Text} from 'react-native';
import React from 'react';
import SearchComponent from '.';
import {FetchAllData} from '../../../services/FetchData';

const IndexTwo = () => {
  return (
    <SearchComponent
      title="Find Movies and related details...."
      FetchData={FetchAllData}
      searchType="Search Movies"
    />
  );
};

export default IndexTwo;
