import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useQuery} from 'react-query';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import routes from '../../../assets/routes';
import FastImage from 'react-native-fast-image';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import StringConstants from '../../../assets/stringConstants';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

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
  // if (isLoading) {
  //   return <ActivityIndicator size="large" />;
  // }

  const filteredData = data?.filter(item => {
    return (
      (item.title && item.title?.toLowerCase().match(search.toLowerCase())) ||
      (item.name && item.name?.toLowerCase().match(search.toLowerCase()))
    );
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextInput
        onFocus={() => {
          setPress(false);
        }}
        onEndEditing={() => {
          setPress(true);
        }}
        placeholder={title}
        autoCapitalize="none"
        autoCorrect={false}
        value={search}
        onChangeText={val => setSearch(val)}
        style={styles.search}
      />
      <View>
        {filteredData?.length == 0 ? (
          <View style={styles.noResultView}>
            <Text style={styles.noResultText}>{StringConstants.NoResult}</Text>
          </View>
        ) : (
          <ScrollView>
            {/* {isLoading ? (
              <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
                numColumns={2}
                renderItem={({item}) => {
                  return (
                    <ShimmerPlaceholder
                      style={{
                        marginHorizontal: 8,

                        borderRadius: 5,
                        width: 160,
                        height: 225,
                        alignSelf: 'center',
                        marginVertical: 10,
                      }}
                      // shimmerColors={['#A9A9A9','#7393B3','#808080']}
                    ></ShimmerPlaceholder>
                  );
                }}
              />
            ) : (
              <FlatList
                ListFooterComponent={() => {
                  return <View style={{height: 80}} />;
                }}
                data={filteredData}
                style={styles.flatListstyle}
                renderItem={renderItem}
                numColumns={2}
              />
            )} */}

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
