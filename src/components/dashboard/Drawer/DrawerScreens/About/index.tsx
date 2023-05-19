import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ColorConstants from '../../../../../assets/colorConstants';
import BackIcon from '../../../../../assets/svgIcons/BackIcon';

import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const About = () => {
  const movie = 'M💿VIE  ';
  const mania = 'MANIA';
  const {goBack} = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
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
      <Text
        style={{
          fontWeight: '700',
          color: '#000',
          fontSize: 20,
          marginBottom: 20,
        }}>
        About:
      </Text>
      <Text style={{color: '#000', marginHorizontal: 20, fontSize: 15}}>
        Movie Mania is the authoritative source for movie, TV and celebrity
        content. Find ratings for the newest movie and TV shows. Movie gives the
        Recommedation for the user according to his liking. Movie Mania provides
        overview, rating and much more. Movie Mania includes films and TV Shows
        of all many types. Movie Mania provides users with perfect value of
        their interest.
      </Text>
    </View>
  );
};

export default About;
