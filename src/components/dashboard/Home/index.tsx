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
  FetchDiscoverTv,
  FetchHomeCarouselData,
  FetchPopularMovie,
  FetchPopularTv,
  FetchRecommendedMovie,
  FetchRecommendedTv,
  FetchSearchMovie,
  FetchTrendingMovie,
  FetchTrendingTv,
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
        maxToRenderPerBatch={4}
        horizontal
        renderItem={({item}) => {
          // console.log(item);
          return (
            <Pressable onPress={()=>{
              navigate('MovieDetail', {item})
            }}>
            <View>
              
              {item.poster_path &&
                (<ImageBackground
                resizeMode="contain"
                imageStyle={styles.MovieTvImageStyle}
                style={styles.MovieTvImg}
                source={{
                  uri: BASE_IMG_URL + 'original' + item.poster_path,
                }}></ImageBackground>)}

            </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};



const width = Dimensions.get('window').width;

const Home = () => {
  const [type, setType] = useState('Movies')
 
  // const [data, setData] = useState([]);
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  
  const {data} = useQuery('HomeCarousel', {queryFn:FetchHomeCarouselData})
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
              resizeMode="stretch"
              style={styles.imgStyle}
              source={{uri: item.backdrop_path}}
            />
          )}
        </View>
      </Pressable>
    );
  };

  const typeSetTvFunc=()=>{
    setType('TV Shows')
  }
  const typeSetMovieFunc=()=>{
    setType('Movies')
  }
  return (
    
    <ScrollView style={styles.mainContainer}>
      <Carousel
        data={data}
        renderItem={renderFunc}
        loop
        ref={isCarousel}
        autoPlay={true}
        scrollAnimationDuration={1000}
        width={width}
        height={(width * 1) / 1.9}
        onSnapToItem={index => setIndex(index)}
      />
      {(type==='Movies')?
      (<><View style={styles.btnViewstyle}>
          <TouchableOpacity style={[styles.btnOne, { backgroundColor: 'orange' }]} onPress={typeSetMovieFunc}>
            <Text style={styles.btnTextStyle}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnTwo, { backgroundColor: 'lightgrey', opacity: 0.6 }]} onPress={typeSetTvFunc}>
            <Text style={styles.btnTextStyle}>TV Shows</Text>
          </TouchableOpacity></View><View style={{ marginTop: 10 }}>
            <MovieTv queryKey="RecommendedMovies"
              headerText="Recommended Movies"
              FetchData={FetchRecommendedMovie} />
            <MovieTv queryKey='PopularMovies'
              headerText='Popular Movies'
              FetchData={FetchPopularMovie} />
            <MovieTv
              queryKey="UpcomingMovies"
              headerText="Upcoming Movies"
              FetchData={FetchUpcomingMovie} />
            <MovieTv
              queryKey="TrendingMovies"
              headerText="Trending Movies"
              FetchData={FetchTrendingMovie} />
            <MovieTv queryKey='HotMovies'
              headerText='Hot'
              FetchData={FetchSearchMovie} />
          </View></>)
    :

    (<><View style={styles.btnViewstyle}>
          <TouchableOpacity style={[styles.btnOne, { backgroundColor: 'lightgrey', opacity: 0.6 }]} onPress={typeSetMovieFunc}>
            <Text style={styles.btnTextStyle}>Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnTwo, { backgroundColor: 'orange' }]} onPress={typeSetTvFunc}>
            <Text style={styles.btnTextStyle}>TV Shows</Text>
          </TouchableOpacity></View><View style={{ marginTop: 10 }}>

            <MovieTv queryKey='TrendingTv'
              headerText='Trending Tv'
              FetchData={FetchTrendingTv} />
            <MovieTv
              queryKey="PopularTv"
              headerText="Popular TV"
              FetchData={FetchPopularTv} />
            <MovieTv
              queryKey="RecommendedTv"
              headerText="Recommended TV Shows"
              FetchData={FetchRecommendedTv} />


            <MovieTv queryKey='DiscoverTv'
              headerText='Discover Shows'
              FetchData={FetchDiscoverTv} />
          </View></>)}
  </ScrollView>
  );
};

export default Home;
