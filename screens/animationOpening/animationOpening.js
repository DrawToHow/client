'use strict'

import React from 'react';
import { 
  Animated, 
  Text, 
  View,
  Image,
  Alert,
  Easing
} from 'react-native';

import styles from '../../styles/GlobalStyles'

// You can then use your `FadeInView` in place of a `View` in your components:
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

// const Styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   header: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
//   logo: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center'
//   },
//   profile: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-end'
//   },
//   level: {
//     flex: 3,
//     backgroundColor: '#F8F8F8',
//     margin: 5,
//     borderRadius: 15,
//     borderColor: '#F8F8F8',
//     // underlayColor: '#F8F8F8'
//     // activeOpacity: 1
//   },
//   levelTextView: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end'
//   },
//   levelText: {
//     color: 'crimson',
//     fontSize: 15,
//     margin: 10,
//     fontFamily: 'Helvetica'
//   },
//   levelDescriptionView: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-end'
//   },
//   levelDescriptionText: {
//     // flex:1,
//     color: 'grey',
//     fontSize: 20,
//     textAlign: 'right',
//     fontFamily: 'Helvetica',
//     includeFontPadding: true,
//     marginRight: 10
//   },
//   image: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start'
//   }
// })
