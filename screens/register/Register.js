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
import firebase from '../../configs/firebaseConfig'

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


class Register extends Component {

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
    email: '',
    password: '',
    error: ''
  }
  
  RegisterHandler = () => {
    Alert.alert('masok!')
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