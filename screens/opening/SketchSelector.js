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
  Slider
} from 'react-native';

// import { Examples } from '@shoutem/ui';

const logo = () => {
  return (
    
      <Text>Logo</Text>
    
  );
}

const profile = () => {
  return (
      <Button title="Profile"/>
  );
}

export default class Opening extends Component {

  selectLevel = () => {
    alert('select level')
  }

 static navigationOptions = {
    headerTitle: logo,
    headerLeft: logo,
    headerRight: (<Button title="Profile"/>),
    headerStyle: {
      backgroundColor: '#FFFFFF',
    }
  };

  render() {
    return (
      <View style={Styles.container}>
              {/* <View style={Styles.header}>
                  <View style={Styles.logo}>
                    <Text>Logo</Text>
                  </View>
                  <View style={Styles.profile}>
                    <Text>Profile</Text>
                  </View>
              </View> */}
             <TouchableOpacity style={Styles.level} onPress={() => this.selectLevel('111')}> 
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
                    <Text style={Styles.levelDescriptionText}>this is the</Text>
                  </View>      
                  </View>     
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.level} onPress={() => this.selectLevel('111')}> 
              <View style={Styles.level}>
                  <View style={Styles.levelTextView}>
                      <Text style={Styles.levelText}>Normal</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-start'}}>
                    <Image 
                      source={{uri: 'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}}
                      style={{width: 100, height: 150, margin: 10}}  
                    />
                    <View style={Styles.levelDescriptionView}>
                      <Text style={Styles.levelDescriptionText}>this is the</Text>
                    </View>      
                  </View>     
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.level} onPress={() => this.selectLevel('111')}> 
              <View style={Styles.level}>
                  <View style={Styles.levelTextView}>
                      <Text style={Styles.levelText}>Hard</Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', justifyContent: 'flex-start'}}>
                    <Image 
                      source={{uri: 'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}}
                      style={{width: 100, height: 150, margin: 10}}  
                    />
                    <View style={Styles.levelDescriptionView}>
                      <Text style={Styles.levelDescriptionText}>this is the</Text>
                    </View>      
                  </View>     
              </View>
            </TouchableOpacity>
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
    backgroundColor: '#F8F8F8',
    margin: 5,
    borderRadius: 15,   
    borderColor: '#F8F8F8',
    // underlayColor: '#F8F8F8'
    // activeOpacity: 1
  },
  levelTextView: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  levelText: {
    color: 'crimson',
    fontSize: 15,
    margin: 10, 
    fontFamily: 'Helvetica'
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
