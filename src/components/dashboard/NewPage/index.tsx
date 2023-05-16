import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Pagination} from 'react-native-snap-carousel';
import axios from 'axios';
import {
  BASE_IMG_URL,
  BASE_URL,
  MOVIE_UPCOMING,
  RECOMENDATIONS_URL_MOVIE,
  SEARCH_URL,
  TRENDING_URL,
  TRENDING_URL_TV,
} from '../../../services';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {useQuery} from 'react-query';
import {
  FetchPopularMovie,
  FetchRecommendedMovie,
  FetchSearchMovie,
  FetchTrendingMovie,
  FetchUpcomingMovie,
} from '../../../services/FetchData';
import {useQueryClient} from 'react-query';
import { ScrollView } from 'react-native';
import ApiUpcomingMovie from '../Home/ApiUpcomingMovie';
const queryClient = useQueryClient;

interface HorizontalComponent {
  headerText: string;
  queryKey: string;
  FetchData?: () => {};
}

export const MovieTv = ({FetchData, headerText, queryKey}: HorizontalComponent) => {
  const {navigate} = useNavigation();
  const [screen, setScreen] =useState('')
  const {data} = useQuery(queryKey, {queryFn: FetchData});
  const handleAllMovie = () =>{
    if (headerText==='Trending Movies'){

      navigate('TrendingMovie');
    }
    if (headerText==='Upcoming Movies'){

      navigate('UpcomingMovie');
    }
    if (headerText==='Popular Movies'){

      navigate('PopularMovie');
    }
    if (headerText==='Hot'){

      navigate('HotMovie');
    }
    if (headerText==='Recommended Movies'){

      navigate('RecommendedMovie');
    }
  }
  // console.log(data);
  return (
    <View >
      <View style={{flexDirection:'row', justifyContent:"space-between"}}>
        <Text
          style={[styles.componentHeaderText]}>
          {headerText}
        </Text>
        <Pressable onPress={handleAllMovie}>
        <Text style={[styles.componentHeaderText,{fontSize:15}]}>See All ></Text>
        </Pressable>
      </View>
      <FlatList
        data={data}
        maxToRenderPerBatch={3}
        horizontal
        renderItem={({item}) => {
          // console.log(item);
          return (
            <View>
              
              {item.backdrop_path &&
                (<ImageBackground
                resizeMode="contain"
                imageStyle={styles.MovieTvImageStyle}
                style={styles.MovieTvImg}
                source={{
                  uri: BASE_IMG_URL + 'original' + item.backdrop_path,
                }}></ImageBackground>)}

                {item.backdrop_path && (<Text style={styles.movieTvtitleText}>{item.title}</Text>)}
            </View>
          );
        }}
      />
    </View>
  );
};

const width = Dimensions.get('window').width;
const NewPage = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  const FetchCarouselData = async () => {
    const trendingData = await axios.get(BASE_URL + TRENDING_URL);
    const upcomingData = await axios.get(BASE_URL + MOVIE_UPCOMING);

    const MovieDatatrending = trendingData.data.results.slice(0, 2).map(item => {
      return {
        // ...GiveData,
        id: item.id,
        release_date: item.release_date ? item.release_date : null,
        backdrop_path: item.backdrop_path
          ? BASE_IMG_URL + 'original' + item.backdrop_path
          : BASE_IMG_URL + 'original' + item.poster_path,
        // title: item.title,
        title: item.title ? item.title : null,

        poster_path: item.poster_path
          ? BASE_IMG_URL + 'original' + item.poster_path
          : null,
        overview: item.overview ? item.overview : null,
      };
    });

    const MovieDataupcoming = upcomingData.data.results.slice(0, 2).map(item => {
      return {
        // ...GiveData,
        id: item.id,
        release_date: item.release_date ? item.release_date : null,
        backdrop_path: item.backdrop_path
          ? BASE_IMG_URL + 'original' + item.backdrop_path
          : BASE_IMG_URL + 'original' + item.poster_path,
        // title: item.title,
        title: item.title ? item.title : null,

        poster_path: item.poster_path
          ? BASE_IMG_URL + 'original' + item.poster_path
          : null,
        overview: item.overview ? item.overview : null,
      };
    });

    setData([...MovieDatatrending,...MovieDataupcoming]);
  };

  useEffect(() => {
    FetchCarouselData();
  }, []);
  // console.log(data);
  const {navigate} = useNavigation();
  const renderFunc = ({item}) => {
    return (
      <Pressable
        onPress={() => {
          navigate('MovieDetail', {item});
        }}>
        <View>
          {item.backdrop_path && (
            <ImageBackground
              resizeMode="cover"
              style={styles.imgStyle}
              source={{uri: item.backdrop_path}}
            />
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView >
      <Carousel
        data={data}
        renderItem={renderFunc}
        loop
        ref={isCarousel}
        autoPlay={true}
        scrollAnimationDuration={1000}
        width={width}
        height={(width * 1) / 1.7}
        onSnapToItem={index => setIndex(index)}
      />
<View style={{marginTop:10}}>
  <MovieTv queryKey="RecommendedMovies"
    headerText="Recommended Movies"
    FetchData={FetchRecommendedMovie}/>
        <MovieTv queryKey='PopularMovies' 
        headerText='Popular Movies' 
        FetchData={FetchPopularMovie}/>
      <MovieTv
        queryKey="UpcomingMovies"
        headerText="Upcoming Movies"
        FetchData={FetchUpcomingMovie}
      />
      <MovieTv
        queryKey="TrendingMovies"
        headerText="Trending Movies"
        FetchData={FetchTrendingMovie}
      />
      <MovieTv queryKey='HotMovies' 
      headerText='Hot' 
      FetchData={FetchSearchMovie}/>
      </View>
    </ScrollView>
  );
};

export default NewPage;
