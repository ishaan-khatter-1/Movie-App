import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageRequireSource,
} from 'react-native';
import useStyle from './styles';
interface PlanInfo {
  header?: string;
  source?: any;
}
import SettingIcon from '../../assets/svgIcons/settingsIcon';
import styles from './styles';
import Carousel from 'react-native-reanimated-carousel';
/**
 * I'm trying to render a carousel with pagination.
 * @param {Props}  -
 */

interface Props {
  data?: any;
}
const UpgradePlanSlider = ({data}: Props) => {
  const [planinfo, setPlanInfo] = useState<PlanInfo[]>([]);
  useEffect(() => {
    if (planinfo.length === 0) {
      setPlanInfo(oldArray => [
        ...oldArray,
        {
          header: 'WHO IS THE ONE FOR YOU?',
          source: SettingIcon,
        },
      ]);
      setPlanInfo(oldArray => [
        ...oldArray,
        {
          header: 'GET YOUR FREE KUNDLI',
          source: SettingIcon,
        },
      ]);
    }
  }, []);
  const onUpgradePlanClick = item => {
    //
  };
  const _renderItem = ({item}) => {
    return (
      <View>
        <Text style={styles.upgradePlanHeaderTitle}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={300}
        height={200}
        data={data}
        // pagingEnabled={true}
        snapEnabled
        autoPlayInterval={5000}
        autoPlay={true}
        overscrollEnabled
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={_renderItem}
      />
    </View>
  );
};
export default UpgradePlanSlider;
