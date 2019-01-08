'use strict';

import React, { Component } from 'react';

// import {
//   StyleSheet,
//   Button,
//   View,
//   TouchableHighlight,
//   Image,
//   AppRegistry,
//   ActivityIndicator,
//   Text,
//   Alert,
// } from 'react-native';

import {
  ViroARScene,
  // ViroText,
  ViroConstants,
  // ViroBox,
  // ViroMaterials,
  ViroARTrackingTargets,
  ViroARImageMarker,
  // ViroARSceneNavigator,
  ViroImage,
  // ViroARPlaneSelector,
  // Viro3DObject,
} from 'react-viro';

export default class CatAR extends Component {

  constructor() {
    super();

    this.state = {
      // text: "Initializing AR...",
      // animal: 'cat',
      // type: 'realistic',
      // image: 1,
      // imageTrace: './res/cat/reailstic/1.png',
      // opacity: 1,
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    const imageNumber = this.props.arSceneNavigator.viroAppProps.imageNumber,
          sliderValue = this.props.arSceneNavigator.viroAppProps.sliderValue,
          // step1 = this.props.arSceneNavigator.viroAppProps.tutorial.step1,
          // step2 = this.props.arSceneNavigator.viroAppProps.tutorial.step2,
          // step3 = this.props.arSceneNavigator.viroAppProps.tutorial.step3,
          // step4 = this.props.arSceneNavigator.viroAppProps.tutorial.step4,
          // step5 = this.props.arSceneNavigator.viroAppProps.tutorial.step5,
          // step6 = this.props.arSceneNavigator.viroAppProps.tutorial.step6,
          // step7 = this.props.arSceneNavigator.viroAppProps.tutorial.step7,
          
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
      // Handle tracking
    } else if (state == ViroConstants.TRACKING_NONE) {
      //Handle loss of tracking
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