import React from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from "react-navigation";
// import Icon from 'react-native-vector-icons/FontAwesome5'

// Screens
import CatAR from './screens/draw/cat/CatAR'
import CoreAR from './screens/draw/core/CoreAR'
import OpeningScreen from './screens/opening/OpeningScreen'
import SignIn from './screens/opening/SignIn'
import SignUp from './screens/opening/SignUp' 

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
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: 'SignIn',
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