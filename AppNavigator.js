import React from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
// import Icon from 'react-native-vector-icons/FontAwesome5'

// Screens
import CatAR from './screens/draw/cat/CatAR'
import CoreAR from './screens/draw/core/CoreAR'
import OpeningScreen from './screens/opening/OpeningScreen'
// import Nearby from './screens/Nearby'
// import NearbyDetail from './screens/Nearby/NearbyDetail'
// import Gmap from './screens/Gmap'

// Styles
// import styles from './GlobalStyles'

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
    Opening: {
      screen: OpeningScreen
    },
    CatAR: {
      screen: CoreAR
    },
  },
  {
    initialRouteName: 'Opening',
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