import React, { Component } from 'react';
import { 
  Text, 
  TextInput, 
  View, 
  Image,
  ScrollView,
} from 'react-native'

import styles from '../../styles/GlobalStyles'

import axios from 'axios'

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

class Register extends Component {

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
    name : '',
    email: '',
    password: '',
    error : '',
    errorName : '',
    errorEmail : '',
    errorPassword : ''
  }
  
  RegisterHandler = () => {
    this._clearErrors()
    const data = {
      name : this.state.name,
      email : this.state.email,
      password : this.state.password
    }
    axios({
      method : 'POST',
      url : `https://ke5fe3javb.execute-api.eu-central-1.amazonaws.com/dev/users/register`,
      data : data
    })
    .then((response)=>{
      this.props.navigation.navigate('SignIn')
    })
    .catch((error)=>{
      const errors = error.response.data.errors
      const keys = Object.keys(errors)
      keys.forEach(key=>{
        if(key === 'email'){
          this.setState({
            ...this.state,
            errorEmail : errors[key].message
          })
        }else if(key === 'password'){
          this.setState({
            ...this.state,
            errorPassword : errors[key].message
          })
        }else if(key === 'name'){
          this.setState({
            ...this.state,
            errorName : errors[key].message
          })
        }
      })
    })
  }

  _clearErrors = () => {
    this.setState({
      ...this.state,
      errorName : '',
      errorEmail : '',
      errorPassword : ''
    })
  }

  render() {
    return (
      <ScrollView   
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'>
        <View style={styles.registerView}>

            {this.state.errorName ? <Text>{this.state.errorName}</Text> : null}
            <TextInput
              placeholder="Name"
              autoCapitalize="none"
              style={styles.RegisterForm}
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />

            {this.state.errorEmail ? <Text>{this.state.errorEmail}</Text> : null}
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.RegisterForm}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />

            {this.state.errorPassword ? <Text>{this.state.errorPassword}</Text> : null}
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={styles.RegisterForm}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />

            <Text style={styles.RegisterSecondary}>
              By registering, I agree to the Terms of Service and Privacy Policy
            </Text>

            <Text
              style={styles.RegisterText}
              onPress={this.RegisterHandler}>
              Register
            </Text>

            <Text 
              onPress={() => this.props.navigation.navigate('SignIn')}
              style={styles.RegisterSecondary}>
              Already have an account? Sign In
            </Text>
        </View>
      </ScrollView>
    );
  }
}

export default Register;