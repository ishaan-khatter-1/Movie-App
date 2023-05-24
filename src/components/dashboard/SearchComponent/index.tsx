import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  Pressable,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import styles from './styles';
import ColorConstants from '../../../assets/colorConstants';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../assets/routes';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
  // const tvMovieRef = useRef();

  // useEffect(() => {
  //   tvMovieRef.current.focus();
  // }, [press]);

  const renderItem = ({item}) => (
    <Pressable
      onPress={() => {
        navigate(routes.dashboard.MovieTvDetail.path, {item});
      }}>
      <View>
        {item.poster_path && (
          <FastImage
            style={styles.imageStyle}
            source={{uri: item.poster_path}}
            resizeMode={FastImage.resizeMode.contain}
          />
        )}
      </View>
    </Pressable>
  );

  const {data, isLoading, isError} = useQuery(dataKey, {queryFn: FetchData});
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  const filteredData = data?.filter(item => {
    if (filteredData?.length !== 0) {
      return (
        (item.title && item.title?.toLowerCase().match(search.toLowerCase())) ||
        (item.name && item.name?.toLowerCase().match(search.toLowerCase()))
      );
    } else {
      console.log('else');
      return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <Text>No result Found</Text>
        </View>
      );
    }
  });

  return (
    <SafeAreaView
      style={{
        paddingTop: 10,
        backgroundColor: ColorConstants.backgroundWhite,
        flex: 1,
      }}>
      {/* {press ? <Text style={styles.headerText}>{title}</Text> : null} */}
      <TextInput
        onFocus={() => {
          setPress(false);
        }}
        onEndEditing={() => {
          setPress(true);
        }}
        placeholder={title}
        // clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        // ref={tvMovieRef}
        onChangeText={val => setSearch(val)}
        style={styles.search}
      />
      <View>
        {filteredData.length === 0 ? (
          <View style={{flex: 1}}>
            <Text style={{alignSelf: 'center'}}>No Result Found.</Text>
          </View>
        ) : (
          <ScrollView>
            <FlatList
              ListFooterComponent={() => {
                return <View style={{height: 80}} />;
              }}
              data={filteredData}
              style={styles.flatListstyle}
              renderItem={renderItem}
              numColumns={2}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchComponent;
