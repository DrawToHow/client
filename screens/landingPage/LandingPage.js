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

import styles from '../../styles/GlobalStyles'

// import ViewShot from 'react-native-view-shot'
import ViewShot, { captureRef } from "react-native-view-shot";

// import { Examples } from '@shoutem/ui';

class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('../../js/res/logo/gogh1-red-large.png')}
        style={{ width: 150, height: 150, marginTop: 80 }}
      />
    );
  }
}

export default class LandingPage extends Component {

  screenShot = () => {
    captureRef(this._ref, {
      format: "jpg",
      quality: 0.8
    })
      .then(
        uri => Alert.alert("Image saved to", JSON.stringify(uri)),
        error => Alert.alert("Oops, snapshot failed", JSON.stringify(error))
      );
  }

  
  static navigationOptions = {
    headerTitle: <Logo />,
    // headerRight: <Logo />,
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomWidth: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  componentDidMount() {
  }

  render() {
    return (
      <View ref={ref => { this._ref = ref }} style={styles.LandingPageView}>
        <View></View>

        <View style={styles.LandingPageMid}>
          <Text style={styles.LandingPageMain}
            onPress={() => this.props.navigation.navigate('SignIn')}
            // onPress={() => this.screenShot}
          >
            Sign In
          </Text>

          <Text style={styles.LandingPageSecondary}>
            No account yet?
          </Text>

          <Text 
            style={styles.LandingPageMainNoMargin}
            onPress={() => this.props.navigation.navigate('Register')}>
            Register
          </Text>
        </View>

        <View style={styles.LandingPageBottom}>
          <Text style={styles.LandingPageQuotes}>
            Love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is done well.
          </Text>
        </View>
      </View>
    );
  }
}