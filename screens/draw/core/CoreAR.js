import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Alert,
  Slider
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

import renderIf from '../../../js/helpers/renderIf';
// var InitialARScene = require('../cat/CatAR');
import CatAR from '../cat/CatAR'

export default class ViroSample extends Component {
  constructor() {
    super();
    // this._renderTrackingText = this._renderTrackingText.bind(this);
    this._onTrackingInit = this._onTrackingInit.bind(this);
    this._onLoadStart = this._onLoadStart.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);

    this.state = {
      viroAppProps: { sliderValue: 100, imageNumber: 1, displayObject: false, yOffset: 0, _onLoadEnd: this._onLoadEnd, _onLoadStart: this._onLoadStart, _onTrackingInit: this._onTrackingInit },
      trackingInitialized: false,
      isLoading: false,
      imageNumber: 1,
      sliderValue: 100
    }
  }

  previous = () => {
    this.setState({
      ...this.state,
      viroAppProps: { ...this.state.viroAppProps, imageNumber: this.state.viroAppProps.imageNumber - 1 }
    })
    // alert(this.state.viroAppProps.imageNumber)
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

  render() {
    return (
      <View style={localStyles.outer} >
        <ViroARSceneNavigator style={localStyles.arView} apiKey="836B1D24-5AEB-425C-AC0E-B5CCE5CC1D32"
          initialScene={{ scene: CatAR, passProps: { displayObject: this.state.displayObject } }}
          viroAppProps={this.state.viroAppProps}
        />
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 50 }}>
          <View style={{ flex: 1, flexDirection: 'row',justifyContent : 'space-between' }}>
            <TouchableHighlight style={localStyles.buttons}
              underlayColor={'#00000000'}
              onPress={this.previous} >
              <Text style={localStyles.buttonText}>PREV</Text>
            </TouchableHighlight>
            <Slider
              step={1}
              maximumValue={10}
              onValueChange={this.sliderChange.bind(this)}
              style={localStyles.slider}
            />
            <TouchableHighlight style={localStyles.buttons}
              onPress={this.next}
              underlayColor={'#00000000'} >
              <Text style={localStyles.buttonText}>NEXT</Text>
            </TouchableHighlight>
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

  // _renderTrackingText() {
  //   return (
  //     <View style={{ position: 'absolute', backgroundColor: "#ffffff22", left: 30, right: 30, top: 30, alignItems: 'flex-start' }}>

  //       <TouchableHighlight style={localStyles.buttons}
  //         onPress={this._onDisplayDialog}
  //         underlayColor={'#00000000'} >
  //         <Image source={require("../../../js/res/btn_mode_objects_on.png")} />
  //         {/* <Image source={require("../../")} /> */}
  //       </TouchableHighlight>
  //     </View>
  //   );
  // }

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
    paddingTop: 20,
    paddingBottom: 20,
    top: 30,
    margin : 5,
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

module.exports = ViroSample
