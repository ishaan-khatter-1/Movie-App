import {View, Text} from 'react-native';
import React from 'react';
import MovieScreen from '..';
import {
  FetchPopularMovie,
  FetchRecommendedMovie,
  FetchSearchMovie,
  FetchTrendingMovie,
  FetchUpcomingMovie,
} from '../../../../services/FetchData';

// let hi: (() => {}) | undefined;

// const typeFunc = props => {
//   if (props.headerText === 'Trending Movies') {
//     return <MovieScreen FetchData={FetchTrendingMovie} />;
//   }
// };

const MovieType = props => {
  // const {FetchData, headerText, queryKey} = props.route.params;
  // const {FetchData, headerText, queryKey} = props.route.params;
  console.log(props);
  // console.log(props.route.params);
  return (
    <View style={{flex: 1}}>
      {props.headerText === 'Trending Movies' ? (
        <MovieScreen FetchData={FetchTrendingMovie} />
      ) : props.headerText === 'Upcoming Movies' ? (
        <MovieScreen FetchData={FetchUpcomingMovie} />
      ) : props.headerText === 'Recommended Movies' ? (
        <MovieScreen FetchData={FetchRecommendedMovie} />
      ) : props.headerText === 'Hot' ? (
        <MovieScreen FetchData={FetchSearchMovie} />
      ) : props.headerText === 'Popular Movies' ? (
        <MovieScreen FetchData={FetchPopularMovie} />
      ) : null}
    </View>
  );
};

export default MovieType;
