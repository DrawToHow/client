'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  AsyncStorage,
} from 'react-native';

import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        histories : ''
      }
    }
    
    _getHistory = async () => {
      try {
        const value = await AsyncStorage.getItem('Access-Token');
        if (value !== null) {
          axios({
            method : 'GET',
            url : 'https://ke5fe3javb.execute-api.eu-central-1.amazonaws.com/dev/histories/',
            headers : {
              'Access-Token' : value 
            }
          })
          .then(({data})=>{
            this.setState({
              ...this.state,
              histories : data
            })
          })
          .catch((error)=>{
            alert(JSON.stringify(error))
          })
        }
      } catch (error) {
        alert('Error Retrieving Access-Token')
      }
    }

    componentDidMount = () => {
      this._getHistory()
    }
    
    render() {
      let style=''
      if(this.state.histories){
        style={flex:1,alignItems:'stretch'}
      }else{
        style={flex:1,justifyContent:'center',alignItems:'center'}
      }

      return (
        <View style={style}>
        {this.state.histories ? (
          this.state.histories.map(history => 
          <View style={{margin : 5 , backgroundColor : 'white' , elevation : 3,padding : 3}}>
            <Text style={{textAlign : 'center', color : 'black'}}>{history.createdAt.slice(0,10)} | TUTORIAL : {history.tutorialId} | Time : {(history.time / 1000 / 60).toFixed(2) } minutes | Score : -</Text>
          </View>
          )
        ):(
            <ActivityIndicator size="large" color="red" />
        )}
        </View>
      )
    }
}

const Styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'stretch'
    }
})