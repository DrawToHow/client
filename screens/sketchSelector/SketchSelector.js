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
  ImageBackground,
  ScrollView
} from 'react-native';

import styles from '../../styles/GlobalStyles'

// import { Examples } from '@shoutem/ui';

class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('../../js/res/logo/gogh1-red-large.png')}
        style={{ width: 60, height: 60, marginTop: 20 }}
      />
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <Image
        source={require('../../js/res/logo/user-profile.png')}
        style={{ width: 40, height: 40, marginTop: 20, marginRight: 20 }}
      />
    );
  }
}

export default class SketchSelector extends Component {

  static navigationOptions = {
    headerTitle: <Logo />,
    headerRight: <Profile />,
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomWidth: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  render() {
    const { navigation } = this.props;
    const difficulty = navigation.getParam('difficulty');


    return (
      <View style={styles.LandingPageView}>
        <View></View>

        <View style={styles.sketchSelectorMid}>
          {
            difficulty === 'easy' ?

            <ScrollView>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CoreAR', {
                  sketch: 'dog'
                })}>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={require('../../js/res/sketchSelector/easy/Dog.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={require('../../js/res/sketchSelector/easy/Cow.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </ScrollView>

            :

            difficulty === 'normal' ?

            <ScrollView>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CoreAR', {
                  sketch: 'cat'
                })}>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={require('../../js/res/sketchSelector/normal/Cat.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={require('../../js/res/sketchSelector/normal/Horse.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={require('../../js/res/sketchSelector/normal/Rat.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </ScrollView>

            :

            difficulty === 'hard' ?

            <ScrollView>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CoreAR', {
                  sketch: 'dragon'
                })}>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={require('../../js/res/sketchSelector/hard/Dragon.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={require('../../js/res/sketchSelector/hard/Eyes.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </ScrollView>

            :

            null
          }


        </View>

        <View style={styles.LandingPageBottom}>
        </View>
      </View>
    );
  }
}