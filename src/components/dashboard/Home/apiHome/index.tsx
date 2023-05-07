import React from 'react';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

import {
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {useQuery} from 'react-query';
import styles from './styles';
import {BASE_IMG_URL} from '../../../../services';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-snap-carousel';
import UpgradePlanSlider from '../../../Slider';
import {
  FetchLatestMovie,
  FetchTrendingMovie,
} from '../../../../services/FetchData';

const width = Dimensions.get('window').width;

// export const ApiLatestMovie = () => {
//   const renderFunc = ({item}) => {
//     return (
//       <View style={styles.renderView}>
//         <ImageBackground
//           style={styles.imgOneStyle}
//           imageStyle={styles.imageStyle}
//           source={{uri: BASE_IMG_URL + 'w500' + item.poster_path}}>
//           <Text>{item.title}</Text>
//         </ImageBackground>
//       </View>
//     );
//   };
//   const {data, isLoading, isError} = useQuery('LatesMovies', FetchLatestMovie);
//   if (isLoading) {
//     return <Text>Loading...</Text>;
//   }

//   if (isError) {
//     return <Text>{isError.message}</Text>;
//   }

//   return (
//     <View style={styles.carouselView}>
//       <Carousel
//         style={styles.carousel}
//         data={data}
//         renderItem={renderFunc}
//         // loop
//         sliderWidth={width * 0.8}
//         itemWidth={width * 0.55}
//         // itemHeight={height}
//       />

//       {/* {data !== undefined ? <UpgradePlanSlider data={data} /> : null} */}
//     </View>
//   );
// };

const ApiTrendingData = () => {
  // const width = Dimensions.get('window').width;
  const height = width * 1.5;

  const renderFunc = ({item}) => {
    return (
      <View style={styles.renderView}>
        <ImageBackground
          style={styles.imgOneStyle}
          imageStyle={styles.imageStyle}
          source={{uri: BASE_IMG_URL + 'w500' + item.poster_path}}>
          <Text>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  };
  const {data, isLoading, isError} = useQuery(
    'TrendingMovies',
    FetchTrendingMovie,
  );
  // console.log(data);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>{isError.message}</Text>;
  }

  // console.log(data.results[0].title);

  return (
    <View style={styles.carouselView}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderFunc}
        loop
        sliderWidth={width * 0.8}
        itemWidth={width * 0.55}
        itemHeight={height}
      />

      {/* {data !== undefined ? <UpgradePlanSlider data={data} /> : null} */}
    </View>
  );
};

export default ApiTrendingData;

// import React from 'react';
// import {Text, View, FlatList, Image, ImageBackground} from 'react-native';
// import {useQuery} from 'react-query';
// import axios from 'axios';
// import styles from './styles';
// import {BASE_IMG_URL} from '../../../../services';

// const fetchMovies = async () => {
//   const apiRes = await axios.get(
//     'https://api.themoviedb.org/3/trending/all/day?api_key=05b5b3464ea382ff0f577956284936db',
//   );
//   return apiRes.data.results;
// };

// const ApiHomeOne = () => {
//   const {data, isLoading, error} = useQuery('movies', fetchMovies);

//   if (isLoading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>{error.message}</Text>;
//   }

//   // console.log(data.results[0].title);

//   return (
//     <>
//       <View style={styles.mainContainer}>
//         <FlatList
//           data={data}
//           horizontal
//           renderItem={({item}) => {
//             return (
//               <View style={styles.container}>
//                 <ImageBackground
//                   style={styles.imgOneStyle}
//                   source={{uri: BASE_IMG_URL + 'w500' + item.poster_path}}>
//                   <Text style={styles.titleStyle}>{item.title}</Text>
//                 </ImageBackground>
//               </View>
//             );
//           }}
//         />
//       </View>
//     </>
//   );
// };

// export default ApiHomeOne;

// import React from 'react';
// import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
// import {useQuery} from 'react-query';
// import axios from 'axios';

// const fetchMovies = async () => {
//   const response = await axios.get(
//     'https://api.themoviedb.org/3/trending/all/day?api_key=05b5b3464ea382ff0f577956284936db',
//   );
//   return response.data.results;
// };

// const App = () => {
//   const {data, isLoading, error} = useQuery('movies', fetchMovies);

//   if (isLoading) {
//     return <Text>Loading...</Text>;
//   }

//   if (error) {
//     return <Text>{error.message}</Text>;
//   }

//   return (
//     <FlatList
//       data={data}
//       keyExtractor={item => item.id.toString()}
//       renderItem={({item}) => (
//         <View style={styles.container}>
//           <Image
//             source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
//             style={styles.poster}
//           />
//           <View style={styles.details}>
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.overview}>{item.overview}</Text>
//           </View>
//         </View>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     marginVertical: 10,
//     marginHorizontal: 20,
//   },
//   poster: {
//     width: 100,
//     height: 150,
//     resizeMode: 'cover',
//   },
//   details: {
//     flex: 1,
//     marginLeft: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   overview: {
//     fontSize: 16,
//   },
// });

// export default App;
