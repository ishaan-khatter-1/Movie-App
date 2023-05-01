import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import styles from './styles';

const fetchPosts = async () => {
  const apiRes = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=05b5b3464ea382ff0f577956284936db',
  );
  return apiRes.data.results;
};

const ApiHomeOne = () => {
  const {data, isLoading, error} = useQuery('trending', fetchPosts);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

    
  console.log(data.results[0].title);

  return (
    <>
    {
      data.map((item, index) => console.log(item.results[index].title));

    }
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <View style={styles.container}>
            <Text style={styles.titleStyle}>{item}</Text>
          </View>
        );
      }}
    />
    </>
  );
};

export default ApiHomeOne;
