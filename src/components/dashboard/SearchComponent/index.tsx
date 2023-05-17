// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TextInput,
//   Dimensions,
//   ScrollView,
//   Pressable,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import {
//   BASE_IMG_URL,
//   BASE_URL,
//   MOVIEAPI,
//   MOVIE_UPCOMING,
//   SEARCH_URL,
//   TRENDING_URL,
// } from '../../../../services';
// import {useQuery} from 'react-query';
// import styles from './styles';
// import ColorConstants from '../../../assets/colorConstants';
// import {colorKeys} from 'moti';
// import {useNavigation} from '@react-navigation/native';
// import {FetchAllData, FetchAllDataTv} from '../../../services/FetchData';

// interface searchText {
//   title: string;
//   // FetchData?: () => {};
//   searchType: string;
//   dataKey: string;
//   // txt: string;
// }

// const SearchComponent = ({title, searchType, dataKey}: searchText) => {
//   const [search, setSearch] = useState('');
//   const [press, setPress] = useState(true);
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

//   // const newText = {txt};
//   // if (searchType === 'Movie Searching') {

//   // }

//   const {data, isLoading, isError} = useQuery(dataKey, {()=>{if (dataKey === 'Movie Searching') {
//     return queryFn: FetchAllData()
//   } else {
//     return queryFn: FetchAllDataTv()
//   }}});
//   const filteredData = data?.filter(item => {
//     return item.title?.toLowerCase().match(search.toLowerCase());
//   });
//   return (
//     <View
//       style={{paddingTop: 10, backgroundColor: ColorConstants.backgroundWhite}}>
//       {press ? <Text style={styles.headerText}>{title}</Text> : null}

//       <TextInput
//         onFocus={() => {
//           setPress(false);
//         }}
//         onBlur={() => {
//           setPress(true);
//         }}
//         placeholder={searchType}
//         clearButtonMode="always"
//         autoCapitalize="none"
//         autoCorrect={false}
//         value={search}
//         onChangeText={val => setSearch(val)}
//         style={styles.search}
//       />
//       <FlatList
//         data={filteredData}
//         style={styles.flatListstyle}
//         renderItem={renderItem}
//         numColumns={2}
//       />
//     </View>
//   );
// };

// export default SearchComponent;

import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  BASE_IMG_URL,
  BASE_URL,
  MOVIEAPI,
  MOVIE_UPCOMING,
  SEARCH_URL,
  TRENDING_URL,
} from '../../../../services';
import {useQuery} from 'react-query';
import styles from './styles';
import ColorConstants from '../../../assets/colorConstants';
import {colorKeys} from 'moti';
import {useNavigation} from '@react-navigation/native';
import {FetchAllData, FetchAllDataTv} from '../../../services/FetchData';

interface searchText {
  title: string;
  searchType: string;
  FetchData?: () => {};
  dataKey?: string;
}

const SearchComponent = ({
  title,
  searchType,
  dataKey,
  FetchData,
}: searchText) => {
  const [search, setSearch] = useState('');
  const [press, setPress] = useState(true);
  const {navigate} = useNavigation();

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => {
        navigate('MovieDetail', {item});
      }}>
      <View style={{margin: 10}}>
        {item.poster_path && (
          <Image style={styles.imageStyle} source={{uri: item.poster_path}} />
        )}
      </View>
    </Pressable>
  );

  // const {data, isLoading, isError} = useQuery(dataKey, () => {
  //   if (dataKey === 'Movie Searching') {
  //     return FetchAllData();
  //   } else {
  //     return FetchAllDataTv();
  //   }
  // });

  const {data, isLoading, isError} = useQuery(dataKey, {queryFn: FetchData});

  const filteredData = data?.filter(item => {
    return (
      (item.title && item.title?.toLowerCase().match(search.toLowerCase())) ||
      (item.name && item.name?.toLowerCase().match(search.toLowerCase()))
    );
  });

  return (
    <View
      style={{paddingTop: 10, backgroundColor: ColorConstants.backgroundWhite}}>
      {press ? <Text style={styles.headerText}>{title}</Text> : null}

      <TextInput
        onFocus={() => {
          setPress(false);
        }}
        onBlur={() => {
          setPress(true);
        }}
        placeholder={searchType}
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={val => setSearch(val)}
        style={styles.search}
      />
      <FlatList
        data={filteredData}
        style={styles.flatListstyle}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default SearchComponent;
