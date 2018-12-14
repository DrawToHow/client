import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Navigator
import AppNavigator from './AppNavigator'

// Store
// import rootReducer from './store/reducers/rootReducer'
// const store = createStore(rootReducer, applyMiddleware(thunk));

// const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {

  render() {
    return (
      // <Provider store={store}>
        <AppNavigator style={styles.container} />
      // </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
