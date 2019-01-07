'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import styles from '../../styles/GlobalStyles'

import Logo from '../../components/logo'
import Profile from '../../components/profile'

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