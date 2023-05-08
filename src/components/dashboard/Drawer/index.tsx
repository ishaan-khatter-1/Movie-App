// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import Drawer from '../../../assets/dashboardStyles/Drawer';

// const Drawericon = ({navigation}) => {
//   return (
//     <TouchableOpacity onPress={() => navigation.openDrawer()}>
//       <Drawer />
//     </TouchableOpacity>
//   );
// };

// export default Drawericon;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
// import Drawer from '../../../assets/dashboardStyles/Drawer';
import Drawer from '../../../assets/dashboardStyles/Drawer';

interface drawerOpenFace {
  drawerOpen: any;
}

// works without interface also

const Drawericon = ({navigation}) => {
  console.log(navigation);
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Drawer />
    </TouchableOpacity>
  );
};

export default Drawericon;
