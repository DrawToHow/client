import React from "react";
import { View, Text, Button } from "react-native";
import { 
  createBottomTabNavigator, 
  createStackNavigator, 
  createDrawerNavigator 
} from "react-navigation";

// Screens

// ? Starting
import AnimationOpening from './screens/animationOpening/animationOpening'
import LandingPage from './screens/landingPage/LandingPage'

import CoreAR from './screens/draw/core/CoreAR'
import SignIn from './screens/signin/SignIn'
import Register from './screens/register/Register' 

import DifficultySelector from './screens/difficultySelector/DifficultySelector'
import SketchSelector from './screens/sketchSelector/SketchSelector'

// Styles
// import styles from './GlobalStyles'

const AppNavigator = createStackNavigator(
  {
    // ? Starting
    AnimationOpening: {
      screen: AnimationOpening,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
    LandingPage: {
      screen: LandingPage,
      navigationOptions: ({ navigation }) => ({
        // header: null
        
      })
    },
    
    // ? User
    SignIn: {
      screen: SignIn,
      navigationOptions: ({ navigation }) => ({
        // header: null
      })
    },
    Register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        // header: null
      })
    },

    // ? Choosing
    DifficultySelector: {
      screen: DifficultySelector
    },
    SketchSelector: {
      screen: SketchSelector
    },

    // ? Drawing
    CatAR: {
      screen: CoreAR,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
  },
  {
    initialRouteName: 'CatAR',

  }
);

export default AppNavigator