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
  AsyncStorage
} from 'react-native';

import styles from '../../styles/GlobalStyles'

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
  _goToProfile = () => {
    this.props.navigation.navigate('Profile')
  }
  render() {
    return (
      <TouchableOpacity onPress={this._goToProfile}>
        <Image
          source={require('../../js/res/logo/user-profile.png')}
          style={{ width: 40, height: 40, marginTop: 20, marginRight: 20 }}
        />
      </TouchableOpacity>
    );
  }
}

export default class LandingPage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <Logo />,
      headerRight: <Profile navigation={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }

  render() {
    return (
      <View style={styles.LandingPageView}>
        <View></View>

        <View style={styles.LandingPageMid}>
          <Text 
            style={styles.difficultySelectorDisabled}>
            Beginner
          </Text>

          <Text 
            style={styles.difficultySelectorMain}
            onPress={() => this.props.navigation.navigate('SketchSelector', {
              difficulty: 'easy'
            })}>
            Easy
          </Text>

          <Text
            style={styles.difficultySelectorMain}
            onPress={() => this.props.navigation.navigate('SketchSelector', {
              difficulty: 'normal'
            })}>
            Normal
          </Text>

          <Text
            style={styles.difficultySelectorMain}
            onPress={() => this.props.navigation.navigate('SketchSelector', {
              difficulty: 'hard'
            })}>
            Hard
          </Text>

          <Text style={styles.difficultySelectorDisabledLast}>
            Expert
          </Text>
        </View>

        <View style={styles.LandingPageBottom}>
          <Text style={styles.difficultySelectorBottom}>
            You can always go back and choose another difficulty. Each level have different sketches to draw from, keep you away from boredom.
          </Text>
        </View>
      </View>
    );
  }
}