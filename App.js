import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

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
        <AppNavigator/>
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
  }
});
