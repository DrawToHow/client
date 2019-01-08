import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'
import axios from 'axios'

import styles from '../../styles/GlobalStyles'

import Logo from '../../components/logo'

class SignIn extends Component {

  static navigationOptions = {
    headerTitle: <Logo />,
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
    errorLogin: '',
    loading : false
  }

  SignInHandler = () => {
    this._startLoading()
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
      this._stopLoading()
      this._storeData(data.accessToken)
    })
    .catch((error)=>{
      this._stopLoading()
      const errors = error.response.data.errors.login
      const errorMessage = errors.message
      this.setState({
        ...this.state,
        errorLogin : errorMessage
      })
    })
  }

  _startLoading = () => {
    this.setState({
      ...this.state,
      loading : true
    })
  }

  _stopLoading = () => {
    this.setState({
      ...this.state,
      loading : false
    })
  }

  _storeData = async (accessToken) => {
    try {
      await AsyncStorage.setItem('Access-Token',  accessToken);
      this.props.navigation.navigate('DifficultySelector')
    } catch (error) {
      alert('error saving to async storage')
    }
  }

  render() {
    let containerStyle = ''
    if(!this.state.loading){
      containerStyle = {
        flexGrow : 1
      }
    }else if(this.state.loading){
      containerStyle = {
        flexGrow : 1,
        justifyContent : 'center',
        alignItems : 'center'
      }
    }

    return (
      <ScrollView
        contentContainerStyle={containerStyle}
        keyboardShouldPersistTaps='handled'>
        {this.state.loading ?  (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <View style={styles.registerView}>
            {this.state.errorLogin ? <Text>{this.state.errorLogin}</Text> : null}

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
        )}
      </ScrollView>
    );
  }
}

export default SignIn;