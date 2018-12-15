import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from '../../configs/firebaseConfig'
import { server } from '../../configs/endPoint'
import axios from 'axios'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    singInHandler = () => {
      this.props.navigation.navigate('CatAR')
    }
    render() {
        return (
            <View style={styles.container}>
            <Text>Login</Text>
            { this.state.error ? <Text>{this.state.error}</Text> : null}
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button title="Login" onPress={this.singInHandler} />
            <Button
              title="Don't have an account? Sign Up"
              onPress={() => this.props.navigation.navigate('SignUp')}
            />
          </View>
        );
    }
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 8
    }
  })