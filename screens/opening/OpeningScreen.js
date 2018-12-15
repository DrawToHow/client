'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  TouchableHighlight,
  Image,
  AppRegistry,
  ActivityIndicator,
  Text,
  Alert,
  Slider
} from 'react-native';

// import { Examples } from '@shoutem/ui';

export default class Opening extends Component {

  render() {
    return (
      <View style={Styles.container}>
            <View style={Styles.header}>
                <View style={Styles.logo}>
                  <Text>Logo</Text>
                </View>
                <View style={Styles.profile}>
                  <Text>Profile</Text>
                </View>
            </View>

            <View style={Styles.level}>
                <View style={Styles.levelTextView}>
                  <Text style={Styles.levelText}>Easy</Text>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-start'}}>
                <Image 
                  source={{uri: 'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}}
                  style={{width: 100, height: 150, margin: 10}}  
                />
                 <View style={Styles.levelDescriptionView}>
                  <Text style={Styles.levelDescriptionText}>this is the desvription lorem ioncsjk hdsfh</Text>
                </View>      
                </View>            
            </View>

            <View style={Styles.level}>
                <View style={Styles.levelTextView}>
                  <Text style={Styles.levelText}>Medium</Text>
                </View>
                <View style={Styles.levelDescriptionView}>
                  <Text style={Styles.levelDescriptionText}>this is the desvription lorem ioncsjk hdsfh</Text>
                </View>
            </View>

            <View style={Styles.level}>
                <View style={Styles.levelTextView}>
                  <Text style={Styles.levelText}>Hard</Text>
                </View>
                <View style={Styles.levelTextView}>
                  <Text style={Styles.levelDescriptionText}>Draw The World's 2nd Favorite domestic animals</Text>
                </View>
            </View>
        </View>

    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  level: {
    flex: 3,
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 15   
  },
  levelTextView: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  levelText: {
    color: 'crimson',
    fontSize: 15,
    margin: 10,
  },
  levelDescriptionView: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  levelDescriptionText: {
    // flex:1,
    color: 'grey',
    fontSize: 20,
    textAlign: 'right',
    fontFamily: 'Helvetica',
    includeFontPadding: true,
    marginRight: 10
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})
