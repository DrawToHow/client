'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  TouchableHighlight,
  Image,
  AppRegistry,
  ActivityIndicator,
  Text,
  Alert,
  Slider
} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroARSceneNavigator,
  ViroImage,
  ViroARPlaneSelector,
  Viro3DObject,
} from 'react-viro';

import renderIf from '../../../js/helpers/renderIf';

export default class CatAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      animal: 'cat',
      type: 'realistic',
      image: 1,
      imageTrace: './res/cat/reailstic/1.png',
      opacity: 1
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  componentDidMount() {
  }

  takePicture() { this.camera.capture().then((data) => console.log(data)).catch(err => console.error(err)); }

  render() {
    const imageNumber = this.props.arSceneNavigator.viroAppProps.imageNumber,
          sliderValue = this.props.arSceneNavigator.viroAppProps.sliderValue

    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroARImageMarker target={"targetOne"} >
 
          {
            imageNumber === 1 ?
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              opacity={sliderValue / 10}
              source={require("../../../js/res/cat/reailstic/1.png")}
            /> :
            imageNumber === 2 ?
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              opacity={sliderValue / 10}
              source={require("../../../js/res/cat/reailstic/2.png")}
            /> :
            imageNumber === 3 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              opacity={sliderValue / 10}
              source={require("../../../js/res/cat/reailstic/3.png")}
            /> :
            imageNumber === 4 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              opacity={sliderValue / 10}
              source={require("../../../js/res/cat/reailstic/4.png")}
            /> :
            imageNumber === 5 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              opacity={sliderValue / 10}
              source={require("../../../js/res/cat/reailstic/5.png")}
            /> :
            imageNumber === 6 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              opacity={sliderValue / 10}
              source={require("../../../js/res/cat/reailstic/6.png")}
            /> :
            imageNumber === 7 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              opacity={sliderValue / 10}
              source={require("../../../js/res/cat/reailstic/7.png")}
            /> :
            null
          }

        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: "Hello World!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

ViroARTrackingTargets.createTargets({
  "targetOne": {
    source: require('../../../js/res/targetOne.jpg'),
    orientation: "Left",
    physicalWidth: 0.21 // paper width IRL
  },
});

var styles = StyleSheet.create({
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});