import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useQuery} from 'react-query';
import {
  FetchAllData,
  FetchAllDataTv,
  FetchTrendingMovie,
  FetchUpcomingMovie,
  MovieTvData,
} from '../../../services/FetchData';
import {ImageBackground} from 'react-native';
import {BASE_IMG_URL} from '../../../services';
import styles from './styles';
import StarRating from '../../../assets/svgIcons/starRating';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../assets/svgIcons/BackIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetal = prop => {
  const {navigate, goBack} = useNavigation();
  const width = Dimensions.get('window').width;
  const {data, isLoading, isError} = useQuery('MovieTVData', MovieTvData);
  const [fav, setFav] = useState(1);
  // console.log()
  // MovieTvData();
  // console.log(prop.route.params);
  const apiDetail = prop.route.params;
  // console.log(apiDetail.item.original_title);

  // console.log(prop.route.params.item);
  const FavMovieTvDetail = prop.route.params.item;
  // console.log(apiDetail.item.backdrop_path);

  // const getFav = async () => {
  //   console.log('item get');
  // };
  // const storeFav = async () => {
  //   const favItem = await AsyncStorage.getItem('FavDetail');
  //   const arrayOne = [FavMovieTvDetail, favItem];
  //   // console.log(arrayOne);
  //   await AsyncStorage.setItem('FavDetail', JSON.stringify(arrayOne));
  //   const existingData = arrayOne ? JSON.parse(favItem) : [];
  //   console.log(existingData);
  // };

  // const storeFav = async () => {
  //   const favItem = await AsyncStorage.getItem('FavDetail');
  //   const arrayOne = [FavMovieTvDetail, ...favItem];
  //   await AsyncStorage.setItem('FavDetail', JSON.stringify(arrayOne));
  //   const existingData = favItem ? JSON.parse(favItem) : [];
  //   console.log(existingData);
  // };

  const storeFav = async () => {
    const favItem = await AsyncStorage.getItem('FavDetail');
    let existingData = [];
    if (
      FavMovieTvDetail.poster_path !==
      existingData.map(poster => poster.poster_path)
    ) {
      setFav(1);
      if (favItem) {
        try {
          existingData = JSON.parse(favItem);
        } catch (error) {
          console.log('Error parsing existing data:', error);
        }
      }
      const arrayOne = [FavMovieTvDetail, ...existingData];
      await AsyncStorage.setItem('FavDetail', JSON.stringify(arrayOne));
    } else {
      setFav(0);
    }
    console.log(existingData);
  };

  // storeFav();

  // const getFav = async () => {};
  const clearFav = async () => {
    await AsyncStorage.removeItem('FavDetail');
    console.log('FavDetail cleared');
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <ImageBackground
        resizeMode="stretch"
        source={{
          uri: apiDetail.item.backdrop_path
            ? BASE_IMG_URL + 'original' + apiDetail.item.backdrop_path
            : BASE_IMG_URL + 'original' + apiDetail.item.poster_path,
        }}
        style={styles.imgStyle}
        imageStyle={styles.imageStyle}>
        <Pressable
          style={styles.pressableBack}
          // onPress={() => prop.navigation.goBack()}
          onPress={() => goBack()}>
          <View style={styles.pressableSymbol}>
            <BackIcon width={25} height={25} fill={'white'} />
          </View>
        </Pressable>
      </ImageBackground>
      <View style={styles.rating_titleView}>
        <Text style={styles.original_titleText}>
          {apiDetail.item.title ? apiDetail.item.title : apiDetail.item.name}
        </Text>
      </View>
      <View style={styles.ReleaseDateView}>
        <Text style={styles.releaseDateText}>Release Date</Text>
        <StarRating width={17} height={17} fill={'yellow'} />
        <Text style={styles.ratingText}>{apiDetail.item.vote_average}</Text>
      </View>
      <Text style={{marginLeft: 15}}>{apiDetail.item.release_date}</Text>
      <Text style={styles.overviewText}>{apiDetail.item.overview}</Text>
      <TouchableOpacity onPress={storeFav}>
        {fav === 1 ? <Text>Add to Favourite</Text> : <Text>Not Favourite</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={clearFav}>
        <Text>clear Favourite</Text>
      </TouchableOpacity>
      <View
        style={
          {
            // backgroundColor: 'red',
            // // width: width * 0.95,
            // alignSelf: 'center',
          }
        }>
        <Text style={styles.moreHeadTxt}>More</Text>
        <FlatList
          keyExtractor={item => item.poster_path}
          data={data}
          // horizontal
          renderItem={({item}) => {
            return (
              <View>
                <Pressable
                  onPress={() => {
                    navigate('MovieDetail', {item});
                  }}>
                  <View style={styles.flatlistImgTextView}>
                    {item.poster_path && (
                      <ImageBackground
                        resizeMode="contain"
                        source={{
                          uri: BASE_IMG_URL + 'original' + item.poster_path,
                        }}
                        imageStyle={{
                          borderRadius: 5,
                        }}
                        style={styles.flatlistImgText}></ImageBackground>
                    )}

                    {item.poster_path && (
                      <View style={{flex: 1, height: 180, marginRight: 10}}>
                        <Text style={styles.flatListTitleText}>
                          {item.title ? item.title : item.name}
                        </Text>
                        <Text style={{marginTop: 5}}>{item.overview}</Text>
                      </View>
                    )}
                  </View>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default MovieDetal;

// import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
// import React, {useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {BASE_IMG_URL} from '../../../services';
// import styles from './styles';
// import BackIcon from '../../../assets/svgIcons/BackIcon';

// const MovieDetal = props => {
//   const [isFavourite, setIsFavourite] = useState(false);
//   const {item} = props.route.params;

//   useEffect(() => {
//     checkFavourite();
//   }, []);

//   const checkFavourite = async () => {
//     try {
//       const favData = await AsyncStorage.getItem('FavDetail');
//       if (favData) {
//         const favArray = JSON.parse(favData);
//         const isFav = favArray.some(
//           favItem => favItem.poster_path === item.poster_path,
//         );
//         setIsFavourite(isFav);
//       }
//     } catch (error) {
//       console.log('Error checking favourite:', error);
//     }
//   };

//   const toggleFavourite = async () => {
//     try {
//       const favData = await AsyncStorage.getItem('FavDetail');
//       let favArray = [];
//       if (favData) {
//         favArray = JSON.parse(favData);
//       }

//       if (isFavourite) {
//         // Remove item from favourites
//         const updatedArray = favArray.filter(
//           favItem => favItem.poster_path !== item.poster_path,
//         );
//         setIsFavourite(false);
//         await AsyncStorage.setItem('FavDetail', JSON.stringify(updatedArray));
//       } else {
//         // Add item to favourites
//         favArray.push(item);
//         setIsFavourite(true);
//         await AsyncStorage.setItem('FavDetail', JSON.stringify(favArray));
//       }
//     } catch (error) {
//       console.log('Error toggling favourite:', error);
//     }
//   };

//   const clearFavourites = async () => {
//     try {
//       await AsyncStorage.removeItem('FavDetail');
//       setIsFavourite(false);
//       console.log('Favourites cleared');
//     } catch (error) {
//       console.log('Error clearing favourites:', error);
//     }
//   };

//   return (
//     <View style={styles.mainContainer}>
//       <ImageBackground
//         resizeMode="stretch"
//         source={{
//           uri: item.backdrop_path
//             ? BASE_IMG_URL + 'original' + item.backdrop_path
//             : BASE_IMG_URL + 'original' + item.poster_path,
//         }}
//         style={styles.imgStyle}
//         imageStyle={styles.imageStyle}>
//         <TouchableOpacity
//           style={styles.pressableBack}
//           onPress={() => props.navigation.goBack()}>
//           <View style={styles.pressableSymbol}>
//             <BackIcon width={25} height={25} fill={'white'} />
//           </View>
//         </TouchableOpacity>
//       </ImageBackground>
//       <View style={styles.rating_titleView}>
//         <Text style={styles.original_titleText}>
//           {item.title ? item.title : item.name}
//         </Text>
//       </View>
//       {/* Other components */}
//       <TouchableOpacity onPress={toggleFavourite}>
//         <Text>
//           {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={clearFavourites}>
//         <Text>Clear Favourites</Text>
//       </TouchableOpacity>
//       {/* More components */}
//     </View>
//   );
// };

// export default MovieDetal;
