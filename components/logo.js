import React from 'react'
import { Image } from 'react-native'

export default class Logo extends React.Component {
  render() {
    return (
      <Image
        source={require('../js/res/logo/gogh1-red-large.png')}
        style={{ width: 60, height: 60, marginTop: 20 }}
      />
    );
  }
}