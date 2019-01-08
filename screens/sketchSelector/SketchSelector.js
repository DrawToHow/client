'use strict';

import React, { Component } from 'react';

import {
  // StyleSheet,
  // Button,
  View,
  // TouchableHighlight,
  TouchableOpacity,
  Image,
  // AppRegistry,
  // ActivityIndicator,
  Text,
  // Alert,
  // Slider,
  // ImageBackground,
  ScrollView,
  AsyncStorage
} from 'react-native';

import styles from '../../styles/GlobalStyles'

import Logo from '../../components/logo'

import Profile from '../../components/profile'

import axios from 'axios'

export default class SketchSelector extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <Logo />,
      headerRight: <Profile navigation={navigation} />,
      headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomWidth: 0,
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }

  constructor(props) {
    super(props)
  
    this.state = {
      token : '',
      tutorials : ''
    }
  }
  
  _getTokenAndTutorials = async () => {
    try {
      const value = await AsyncStorage.getItem('Access-Token');
      if (value !== null) {
        axios({
          method : 'GET',
          url : 'https://ke5fe3javb.execute-api.eu-central-1.amazonaws.com/dev/tutorials/',
          headers : {
            "Access-Token" : value
          }
        })
        .then((response) => {
          this.setState({
            ...this.state,
            tutorials : response.data
          })
        })
        .catch((error)=>{
          alert('error get')
        })
      }
    } catch (error) {
      alert('Error Retrieving Access-Token')
      this.props.navigation.navigate('SignIn')
    }
  }

  componentDidMount = () => {
    this._getTokenAndTutorials()
  }
  
  render() {
    const { navigation } = this.props;
    const difficulty = navigation.getParam('difficulty');

    return (
      <View style={styles.LandingPageView}>
        {/* <View></View> */}

        <View style={styles.sketchSelectorMid}>
          {
            difficulty === 'easy' ?

            <ScrollView>
              <TouchableOpacity>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={{uri : 'https://s3-ap-southeast-1.amazonaws.com/goghapp/Cow.png'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={{uri : 'https://s3-ap-southeast-1.amazonaws.com/goghapp/dog.png'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </ScrollView>

            :

            difficulty === 'normal' ?

            <ScrollView>
              {this.state.tutorials ? (
                this.state.tutorials.map(data => 
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('CoreAR', {
                      sketch: data._id
                    })}>
                    <Image
                      style={{ height: 250, width: 380 }}
                      source={{uri : data.thumbnail}}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )
              ) : (
                <Text>Please wait...</Text>
              )}
            </ScrollView>

            :

            difficulty === 'hard' ?

            <ScrollView>
              <TouchableOpacity>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={{uri : 'https://s3-ap-southeast-1.amazonaws.com/goghapp/Dragon.png'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={{ height: 250, width: 380 }}
                  source={{uri : 'https://s3-ap-southeast-1.amazonaws.com/goghapp/Eyes.png'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </ScrollView>
            :
            null
          }

        </View>

        <View style={styles.LandingPageBottom}>
        </View>

      </View>
    );
  }
}