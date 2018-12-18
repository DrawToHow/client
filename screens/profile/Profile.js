'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  AppRegistry,
  ActivityIndicator,
  Text,
  Alert,
  Slider,
  DImen,
  AsyncStorage
} from 'react-native';

import axios from 'axios'

// import Svg,{
//     Circle,
//     Ellipse,
//     G,
//     // Text,
//     TSpan,
//     TextPath,
//     Path,
//     Polygon,
//     Polyline,
//     Line,
//     Rect,
//     Use,
//     // Image,
//     Symbol,
//     Defs,
//     LinearGradient,
//     RadialGradient,
//     Stop,
//     ClipPath,
//     Pattern,
//     Mask,
// } from 'react-native-svg';

// const { width, height } = Dimensions.get('window');

export default class Profile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        histories : ''
      }
    }
    
    _getHistory = async () => {
      try {
        const value = await AsyncStorage.getItem('Access-Token');
        if (value !== null) {
          axios({
            method : 'GET',
            url : 'https://ke5fe3javb.execute-api.eu-central-1.amazonaws.com/dev/histories/',
            headers : {
              'Access-Token' : value 
            }
          })
          .then(({data})=>{
            this.setState({
              ...this.state,
              histories : data
            })
          })
          .catch((error)=>{
            alert(JSON.stringify(error))
          })
        }
      } catch (error) {
        alert('Error Retrieving Access-Token')
      }
    }

    componentDidMount = () => {
      this._getHistory()
    }
    
    render() {
      return (
        <View>
        {this.state.histories ? (
          <Text>{JSON.stringify(this.state.histories)}</Text>
        ):(
          <Text>Masih Loading...</Text>
        )}
        </View>
      )
    }
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'stretch'
    }
})