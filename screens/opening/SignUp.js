import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from '../../configs/firebaseConfig'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }
    signUpHandler = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation.navigate('SignIn')
            })
            .catch(err => {
                this.setState({error: err.message})
            })
    }


    render() {
        return (
            <View style={styles.container}>
            <Text>Sign Up</Text>
            {this.state.error ? <Text>{this.state.error}</Text> : null}
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Button title="Sign Up" onPress={this.signUpHandler} />
            <Button
              title="Already have an account? Login"
              onPress={() => this.props.navigation.navigate('SignIn')}
            />
          </View>
        );
    }
}

export default SignUp;

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