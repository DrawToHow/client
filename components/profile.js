import React from 'react'
import {TouchableOpacity,Image} from 'react-native'

export default class Profile extends React.Component {
  _goToProfile = () => {
    this.props.navigation.navigate('Profile')
  }
  
  render() {
    return (
      <TouchableOpacity onPress={this._goToProfile}>
        <Image
          source={require('../js/res/logo/user-profile.png')}
          style={{ width: 40, height: 40, marginTop: 20, marginRight: 20 }}
        />
      </TouchableOpacity>
    );
  }
}