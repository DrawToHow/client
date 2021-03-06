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

import ProfilePage from './screens/profile/Profile'
import GameOver from './screens/gameOver/GameOver'
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
    CoreAR: {
      screen: CoreAR,
      navigationOptions: ({ navigation }) => ({
        
      })
    },
    Profile : {
      screen : ProfilePage,
    },
    GameOver : {
      screen : GameOver
    }
  },
  {
    initialRouteName: 'SignIn'
  }
);

export default AppNavigator