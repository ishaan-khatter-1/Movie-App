import {View, Text, TextInput, FlatList, Image, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';
import SearchMovie from './SearchMovie';
import SearchComponent from '../../SearchComponent';
import {FetchAllData, FetchAllDataTv} from '../../../../services/FetchData';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';

const Television = () => {
  // const {data, isLoading} = useQuery('allTvData', {
  //   queryFn: FetchAllDataTv, // Add queryFn option
  // });
  // const {navigate} = useNavigation();
  // const renderItem = ({item}) => (
  //   <Pressable
  //     onPress={() => {
  //       navigate('MovieDetail', {item});
  //     }}>
  //     <View style={{margin: 10}}>
  //       {item.poster_path && (
  //         <Image style={styles.imageStyle} source={{uri: item.poster_path}} />
  //       )}
  //     </View>
  //   </Pressable>
  // );

  // const filteredData = data?.filter(item => {
  //   return item.title?.toLowerCase().match(search.toLowerCase());
  // });
  // const filteredData = data?.filter(item=>{
  //   return item.title?.toLowerCase()
  // })
  return (
    <View>
      <View style={styles.SearchComponentStyle}>
        <SearchComponent
          title="Find TV Shows and Related Details"
          searchType={'Search TV Shows'}
          FetchData={FetchAllDataTv}
          dataKey="Tv Searching"
        />
      </View>
      {/* <FlatList
        data={data}
        style={styles.flatListstyle}
        renderItem={renderItem}
        numColumns={2}
      /> */}
    </View>
  );
};

export default Television;

// return (
//   <View style={styles.mainContainer}>
//     {isLoading ? (
//       <Text>is loading...</Text>
//     ) : (
//       <SearchComponent
//         title="Find TV and related details...."
//         // FetchData={FetchAllData}
//         searchType="Find Movies"
//         FetchData={FetchAllDataTv}
//         dataKey="Tv Searching"
//       />
//     )}
//   </View>
// );
