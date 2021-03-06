import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  Alert
} from 'react-native'
import axios from 'axios'

import { AsyncStorage } from "react-native"

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

class SignIn extends Component {

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

  state = {
    email: 'hadi@mail.com',
    password: 'secret',
    error: ''
  }

  SignInHandler = () => {
    const data = {
      email : this.state.email,
      password : this.state.password
    }
    axios({
      method : 'POST',
      url : 'https://ke5fe3javb.execute-api.eu-central-1.amazonaws.com/dev/users/login',
      data
    })
    .then(({data})=>{
      this._storeData(data.accessToken)
      this.props.navigation.navigate('DifficultySelector')
    })
    .catch((error)=>{
      alert('sign in error')
    })
  }

  _storeData = async (accessToken) => {
    try {
      await AsyncStorage.setItem('Access-Token',  accessToken);
    } catch (error) {
      // Error saving data
      alert('error saving to async storage')
    }
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'>
        <View style={styles.registerView}>
          {this.state.error ? <Text>{this.state.error}</Text> : null}

          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.RegisterForm}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />

          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.RegisterForm}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />

          <Text
            style={styles.signInText}
            onPress={this.SignInHandler}>
            Sign In
            </Text>

          <Text
            onPress={() => this.props.navigation.navigate('Register')}
            style={styles.RegisterSecondary}>
            No account yet? Register here.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default SignIn;