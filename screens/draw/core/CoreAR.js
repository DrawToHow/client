import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Alert,
  Slider,
  Modal,
  AsyncStorage
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

// import { captureRef } from "react-native-view-shot";

import axios from 'axios'

import CatAR from '../cat/CatAR'

import styles from '../../../styles/GlobalStyles'

import Logo from '../../../components/logo'

class PreviousButton extends React.Component {
  render() {
    return (
      <Image
        source={require('../../../js/res/icons/prev.png')}
        style={{ width: 60, height: 60, marginLeft: 20 }}
      />
    );
  }
}

class NextButton extends React.Component {
  render() {
    return (
      <Image
        source={require('../../../js/res/icons/next.png')}
        style={{ width: 60, height: 60, marginRight: 20 }}
      />
    );
  }
}

export default class CoreAR extends Component {

  constructor() {
    super();
    this._onTrackingInit = this._onTrackingInit.bind(this);
    this._onLoadStart = this._onLoadStart.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);

    this.state = {
      viroAppProps: { sliderValue: 100, imageNumber: 1, displayObject: false, yOffset: 0, _onLoadEnd: this._onLoadEnd, _onLoadStart: this._onLoadStart, _onTrackingInit: this._onTrackingInit },
      trackingInitialized: false,
      isLoading: false,
      imageNumber: 1,
      sliderValue: 100,
      // modalVisible: false,
      startDate : '',
      token : ''
    }
  }

  static navigationOptions = ({ navigation }) => { 
    return { 
      headerTitle: <Logo />, 
      headerTransparent: true, 
      headerStyle: {borderBottomWidth: 0},
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

  previous = () => {
    this.setState({
      ...this.state,
      viroAppProps: { ...this.state.viroAppProps, imageNumber: this.state.viroAppProps.imageNumber - 1 }
    })
  }

  submit = () => {
    // this.props.navigation.navigate('GameOver')
    // captureRef(this.refs["NEGER"], {
    //   format: "png",
    //   quality: 0.9,
    //   result: "tmpfile",
    //   snapshotContentContainer: false
    // })
    //   .then(res => {
    //     Alert.alert(JSON.stringify(res))
    //   })
    //   .catch(err => {
    //     Alert.alert(JSON.stringify(err))
    //   })
    const diff = Math.abs(new Date() - this.state.startDate);

    axios({
      method : "POST",
      url : `https://ke5fe3javb.execute-api.eu-central-1.amazonaws.com/dev/histories/`,
      data : {
        tutorialId : 'catTutorial',
        time : diff,
        score : 'not defined'
      },
      headers : {
        "Access-Token" : this.state.token
      }
    })
    .then((response)=>{
      this.props.navigation.navigate('Profile')
      // alert("save to history success")
    })
    .catch((error)=>{
      alert('save to history error')
    })
  }

  next = () => {
    this.setState({
      ...this.state,
      viroAppProps: { ...this.state.viroAppProps, imageNumber: this.state.viroAppProps.imageNumber + 1 }
    })
    // alert(this.state.viroAppProps.imageNumber)
  }

  sliderChange = value => {
    this.setState({
      ...this.state,
      viroAppProps: { ...this.state.viroAppProps, sliderValue: value }
    })
  }

  componentDidMount() {
    this._getToken()
  }

  _getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('Access-Token');
      if (value !== null) {
        this.setState({
          ...this.state,
          token : value,
          startDate : new Date()
        })
      }
    } catch (error) {
      alert('Error Retrieving Access-Token')
      this.props.navigation.navigate('SignIn')
    }
  }


  render() {
    return (
        <View 
        style={localStyles.outer} 
        // ref="scene"
        // ref={(c) => this._arScene = c}
        >
          <ViroARSceneNavigator
            style={localStyles.arView} 
            apiKey="836B1D24-5AEB-425C-AC0E-B5CCE5CC1D32"
            initialScene={{ scene: CatAR, passProps: { displayObject: this.state.displayObject } }}
            viroAppProps={this.state.viroAppProps}
            
          />
          <View style={{position: 'absolute', left: 0, right: 0, bottom: 50 }}>
            <View style={{
              flex: 1, justifyContent: 'center',
              alignItems: 'center', flexDirection: 'row',justifyContent : 'space-between' }}>

              {
                this.state.viroAppProps.imageNumber > 1 ?

                <TouchableHighlight onPress={this.previous}>
                  <PreviousButton />
                </TouchableHighlight>

                :

                <TouchableHighlight>
                  <PreviousButton />
                </TouchableHighlight>
              }

              <Slider
                step={1}
                maximumValue={10}
                onValueChange={this.sliderChange.bind(this)}
                style={localStyles.slider}
              />

              {
                this.state.viroAppProps.imageNumber < 7 ?

                <TouchableHighlight onPress={this.next}>
                  <NextButton />
                </TouchableHighlight>

                :

                <TouchableHighlight onPress={() => this.submit()}>
                  <Text>Submit</Text>
                </TouchableHighlight>
              }

            </View>
          </View>

        </View>
    );
  }

  // Invoked when a model has started to load, we show a loading indictator.
  _onLoadStart() {
    this.setState({
      isLoading: true,
    });
  }

  // Invoked when a model has loaded, we hide the loading indictator.
  _onLoadEnd() {
    this.setState({
      isLoading: false,
    });
  }

  _onTrackingInit() {
    this.setState({
      trackingInitialized: true,
    });
  }
}

var localStyles = StyleSheet.create({
  outer: {
    flex: 1,
  },

  buttonText : {
    textAlign : 'center'
  },

  arView: {
    flex: 1,
  },

  slider: {
    height: 80,
    width: 150,
    paddingBottom: 20,
    opacity : 0.8
  },

  buttons: {
    height: 80,
    width: 80,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#00000000',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ffffff00',
    backgroundColor: "#ffffff22",
    top: 30,
    margin : 5
  }
});
