import React from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
// import Icon from 'react-native-vector-icons/FontAwesome5'

// Screens
import Cat from './screens/draw/cat/CatAR'
// import Nearby from './screens/Nearby'
// import NearbyDetail from './screens/Nearby/NearbyDetail'
// import Gmap from './screens/Gmap'

// Styles
import styles from './GlobalStyles'

const AppNavigator = createStackNavigator(
  {
    // Home: {
    //   screen: Home,
    // },
    // Nearby: {
    //   screen: createStackNavigator({
    //     Nearby: Nearby,
    //     Detail: NearbyDetail
    //   })
    // },
    // Map: {
    //   screen: Gmap
    // }
    CatAR: {
      screen: CatAR
    }
  },
  {
    initialRouteName: 'CatAR',
    tabBarOptions: {
      activeTintColor: '#E71D36',
      inactiveTintColor: '#FDFFFC',
      // backgroundColor: '#011627',
      showIcon: false,
      style: {
        backgroundColor: '#011627',
      },
    },
  }
);

export default AppNavigator