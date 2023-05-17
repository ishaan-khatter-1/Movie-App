// import {View, Text, FlatList, TextInput, Image, Pressable} from 'react-native';
// import React, {useState} from 'react';
// // import styles from './styles';
// import SearchComponent from '../SearchComponent';
// import {FetchAllData, FetchAllDataTv} from '../../../services/FetchData';
// import axios from 'axios';
// import {
//   BASE_URL,
//   TRENDING_URL_TV,
//   POPULAR_URL_TV,
//   RECOMENDATIONS_URL_TV,
//   DISCOVER_TV_URL,
//   BASE_IMG_URL,
// } from '../../../services';
// import styles from './styles';
// import {useNavigation} from '@react-navigation/native';

// const Television = () => {
//   const [data, setData] = useState([]);
//   const FetchAllDataTv = async () => {
//     const trendingRes = await axios.get(BASE_URL + TRENDING_URL_TV);
//     const popularRes = await axios.get(BASE_URL + POPULAR_URL_TV);
//     const recommendedRes = await axios.get(BASE_URL + RECOMENDATIONS_URL_TV);
//     const discoverRes = await axios.get(BASE_URL + DISCOVER_TV_URL);

//     const trendingData = trendingRes.data.results.map(item => {
//       return {
//         id: item.id,
//         name: item.name ? item.name : null,
//         release_date: item.release_date ? item.release_date : null,
//         backdrop_path: item.backdrop_path
//           ? BASE_IMG_URL + 'original' + item.backdrop_path
//           : BASE_IMG_URL + 'original' + item.poster_path,
//         // title: item.title,
//         title: item.title ? item.title : null,

//         poster_path: item.poster_path
//           ? BASE_IMG_URL + 'original' + item.poster_path
//           : null,
//         overview: item.overview ? item.overview : null,
//       };
//     });
//     const popularData = popularRes.data.results.map(item => {
//       return {
//         id: item.id,
//         name: item.name ? item.name : null,
//         release_date: item.release_date ? item.release_date : null,
//         backdrop_path: item.backdrop_path
//           ? BASE_IMG_URL + 'original' + item.backdrop_path
//           : BASE_IMG_URL + 'original' + item.poster_path,
//         // title: item.title,
//         title: item.title ? item.title : null,

//         poster_path: item.poster_path
//           ? BASE_IMG_URL + 'original' + item.poster_path
//           : null,
//         overview: item.overview ? item.overview : null,
//       };
//     });
//     const recommendedData = recommendedRes.data.results.map(item => {
//       return {
//         id: item.id,
//         name: item.name ? item.name : null,
//         release_date: item.release_date ? item.release_date : null,
//         backdrop_path: item.backdrop_path
//           ? BASE_IMG_URL + 'original' + item.backdrop_path
//           : BASE_IMG_URL + 'original' + item.poster_path,
//         // title: item.title,
//         title: item.title ? item.title : null,

//         poster_path: item.poster_path
//           ? BASE_IMG_URL + 'original' + item.poster_path
//           : null,
//         overview: item.overview ? item.overview : null,
//       };
//     });
//     const discoverData = discoverRes.data.results.map(item => {
//       return {
//         id: item.id,
//         name: item.name ? item.name : null,
//         release_date: item.release_date ? item.release_date : null,
//         backdrop_path: item.backdrop_path
//           ? BASE_IMG_URL + 'original' + item.backdrop_path
//           : BASE_IMG_URL + 'original' + item.poster_path,
//         // title: item.title,
//         title: item.title ? item.title : null,

//         poster_path: item.poster_path
//           ? BASE_IMG_URL + 'original' + item.poster_path
//           : null,
//         overview: item.overview ? item.overview : null,
//       };
//     });
//     setData([
//       ...trendingData,
//       ...popularData,
//       ...recommendedData,
//       ...discoverData,
//     ]);
//   };
//   const {navigate} = useNavigation();
//   const renderItem = ({item}) => (
//     <Pressable
//       onPress={() => {
//         navigate('MovieDetail', {item});
//       }}>
//       <View style={{margin: 10}}>
//         {item.poster_path && (
//           <Image style={styles.imageStyle} source={{uri: item.poster_path}} />
//         )}
//       </View>
//     </Pressable>
//   );
//   console.log(data);
//   return (
//     <View>
//       <TextInput
//         placeholder="Search"
//         clearButtonMode="always"
//         autoCapitalize="none"
//         autoCorrect={false}
//       />
//       <FlatList
//         data={data}
//         style={styles.flatListstyle}
//         renderItem={renderItem}
//         numColumns={2}
//       />
//     </View>
//   );
// };

// export default Television;

// import {View, Text, TextInput} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import ApiMovie from './ApiMovie';
// import styles from './styles';
// import SearchComponent from '../SearchComponent';
// import {FetchAllData, FetchAllDataTv} from '../../../services/FetchData';
// import {useQuery, useQueryClient} from 'react-query';

// const Television = () => {
//   // const [data, setData] = useState();
//   // const res = FetchAllDataTv();
//   // const {data} = useQuery('TV Data', {queryFn: FetchAllDataTv});

//   // const {data} = useQuery('TV Data', {queryFn: FetchAllDataTv});
//   // const queryClient = useQueryClient();
//   // const adata: any = data;
//   // useEffect(() => {
//   //   // console.log(FetchAllDataTv);
//   //   setData(res);
//   // }, []);
//   // const FetchData = data;
//   // console.log(adata);
//   return (
//     <View style={styles.mainContainer}>
//       <SearchComponent
//         title="Find TV Shows and related details...."
//         // FetchData={data}
//         searchType="Find TV Shows"
//         dataKey="TV Searching"
//       />
//     </View>
//     // </View>
//   );
// };

// export default Television;

import {View, Text, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import ApiMovie from './ApiMovie';
import styles from './styles';
import SearchMovie from './SearchMovie';
import SearchComponent from '../SearchComponent';
import {FetchAllData, FetchAllDataTv} from '../../../services/FetchData';
import {useQuery} from 'react-query';

const Movie = () => {
  const {data, isLoading} = useQuery('hil', FetchAllDataTv);
  console.log(data);
  useEffect(() => {
    FetchAllDataTv();
  }, []);
  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <Text>is loading...</Text>
      ) : (
        <SearchComponent
          title="Find Movies and related details...."
          // FetchData={FetchAllData}
          searchType="Find Movies"
          FetchData={FetchAllDataTv}
          dataKey="Movie Searching"
        />
      )}
    </View>
  );
};

export default Movie;
