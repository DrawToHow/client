'use strict';

import React, { Component } from 'react';

import {
  View,
  Image,
  Text,
} from 'react-native';

import styles from '../../styles/GlobalStyles'

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

  static navigationOptions = {
    headerTitle: <Logo />,
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomWidth: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }
  };

  render() {
    return (
      <View ref={ref => { this._ref = ref }} style={styles.LandingPageView}>
        <View></View>

        <View style={styles.LandingPageMid}>
          <Text style={styles.LandingPageMain}
            onPress={() => this.props.navigation.navigate('SignIn')}
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