// import {View, Text, ImageBackground, ScrollView} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {BASE_IMG_URL} from '../../../../../services';

// const Favourite = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const storedData = await AsyncStorage.getItem('FavDetail');
//       if (storedData !== null) {
//         setData(JSON.parse(storedData));
//       }
//       // console.log(storedData);
//     };
//     fetchData();
//   }, []);
//   console.log(data);

//   // const movieTvData = () =>
//   //   data.map(item => {
//   //     return {
//   //       backdrop_path: item.backdrop_path,
//   //       title: item.title ? item.title : item.name,
//   //       overview: item.overview,
//   //     };
//   //   });
//   return (
//     <ScrollView>
//       <Text>Favourite</Text>

//       {data.map(item => (
//         <View style={{flexDirection: 'row', marginHorizontal: 10}}>
//           <ImageBackground
//             resizeMode="contain"
//             // key={item.poster_path}
//             style={{width: 130, height: 195}}
//             source={{uri: BASE_IMG_URL + 'original' + item.poster_path}}>
//             {/* <Text>HI</Text> */}
//           </ImageBackground>
//           <View style={{marginHorizontal: 10, flex: 1}}>
//             <Text style={{fontWeight: '800'}}>
//               {item.title ? item.title : item.name}
//             </Text>
//             <Text style={{marginVertical: 5, height: 170}}>
//               {item.overview}
//             </Text>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default Favourite;

import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_IMG_URL} from '../../../../../services';

const Favourite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('FavDetail');
      if (storedData !== null) {
        setData(JSON.parse(storedData));
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const removeItem = async item => {
    try {
      const updatedData = data.filter(
        dataItem => dataItem.poster_path !== item.poster_path,
      );
      await AsyncStorage.setItem('FavDetail', JSON.stringify(updatedData));
      setData(updatedData);
    } catch (error) {
      console.log('Error removing item:', error);
    }
  };

  return (
    <ScrollView>
      <Text>Favourite</Text>

      {data.map(item => (
        <View
          key={item.poster_path}
          style={{flexDirection: 'row', marginHorizontal: 10}}>
          <ImageBackground
            resizeMode="contain"
            style={{width: 130, height: 195}}
            source={{
              uri: BASE_IMG_URL + 'original' + item.poster_path,
            }}></ImageBackground>
          <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={{fontWeight: '800'}}>
              {item.title ? item.title : item.name}
            </Text>
            <Text style={{marginVertical: 5, height: 170}}>
              {item.overview}
            </Text>
            <TouchableOpacity onPress={() => removeItem(item)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Favourite;
