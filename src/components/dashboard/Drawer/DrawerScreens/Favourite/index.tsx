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
import BackIcon from '../../../../../assets/svgIcons/BackIcon';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ColorConstants from '../../../../../assets/colorConstants';

const Favourite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const storedData = await AsyncStorage.getItem('FavDetail');
    if (storedData !== null) {
      setData(JSON.parse(storedData));
    }
  };

  const removeItem = async item => {
    const updatedData = data.filter(
      dataItem => dataItem.poster_path !== item.poster_path,
    );
    await AsyncStorage.setItem('FavDetail', JSON.stringify(updatedData));
    setData(updatedData);
  };
  const movie = 'M💿VIE  ';
  const mania = 'MANIA';
  const {goBack} = useNavigation();
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.pressableBack} onPress={() => goBack()}>
          <View style={styles.pressableSymbol}>
            <BackIcon width={30} height={30} fill={'#fff'} />
          </View>
        </TouchableOpacity>
        {/* <Text style={{color: 'white'}}>Movie Mania</Text> */}
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: ColorConstants.textWhite, fontSize: 20}}>
            {movie}
          </Text>
          <Text style={{color: ColorConstants.thirdOrange, fontSize: 22}}>
            {mania}
          </Text>
        </View>
      </View>

      {data.map(item => (
        <View key={item.poster_path} style={{flexDirection: 'row', margin: 10}}>
          <ImageBackground
            resizeMode="contain"
            style={{width: 130, height: 195}}
            source={{
              uri: BASE_IMG_URL + 'original' + item.poster_path,
            }}></ImageBackground>
          <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={{fontWeight: '800', color: 'black'}}>
              {item.title ? item.title : item.name}
            </Text>
            <Text style={{marginVertical: 5, height: 130}}>
              {item.overview}
            </Text>
            <TouchableOpacity
              style={{marginTop: 5}}
              onPress={() => removeItem(item)}>
              <Text style={{fontWeight: '700'}}>Remove from favourites</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Favourite;
