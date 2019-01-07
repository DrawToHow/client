'use strict'

import React from 'react';
import { 
  Animated, 
  Text, 
  View,
  Image,
} from 'react-native';

import styles from '../../styles/GlobalStyles'

export default class App extends React.Component {

  state = {
    fadeAnim: new Animated.Value(0),
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <View style={styles.defaultView}>
        <Animated.View 
          style={{ 
            width: 300, 
            height: 300, 
            opacity: fadeAnim,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            style={{ 
              width: 300, 
              height: 300,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onLoadEnd={() => {
              // Loading in
              Animated.timing(
                fadeAnim,
                {
                  toValue: 1,
                  duration: 2000,
                }
              ).start(() => {
                setTimeout(() => {
                  this.props.navigation.navigate('LandingPage')
                }, 1000)
              })
            }}
            source={require('../../js/res/logo/gogh1-red-large.png')}
          />
          <Text style={styles.AnimationOpeningText}>
            Gogh, your personal sketch trainer.
          </Text>
        </Animated.View>
      </View>
    )
  }
}