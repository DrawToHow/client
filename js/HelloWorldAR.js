'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  View,
  TouchableHighlight,
  Image
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
  Viro3DObject
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text: "Initializing AR...",
      animal: 'cat',
      type: 'realistic',
      image: 1,
      imageTrace: './res/cat/reailstic/1.png'
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  componentDidMount() {
    alert(this.props.arSceneNavigator.viroAppProps.imageNumber)
  }


  takePicture() { this.camera.capture().then((data) => console.log(data)).catch(err => console.error(err)); }

  render() {
    const imageNumber = this.props.arSceneNavigator.viroAppProps.imageNumber
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroARImageMarker target={"targetOne"} >
          {/* <ViroImage
            scale={[.147, .2079, 0]}
            position={[0, 0.0001, 0]}
            rotation={[-90, -90, 0]}
            source={require("./res/cat/reailstic/2.png")}
          /> */}
          {
            imageNumber === 1 ?
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              source={require("./res/cat/reailstic/1.png")}
            /> :
            imageNumber === 2 ?
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              source={require("./res/cat/reailstic/2.png")}
            /> :
            imageNumber === 3 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              source={require("./res/cat/reailstic/3.png")}
            /> :
            imageNumber === 4 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              source={require("./res/cat/reailstic/4.png")}
            /> :
            imageNumber === 5 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              source={require("./res/cat/reailstic/5.png")}
            /> :
            imageNumber === 6 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              source={require("./res/cat/reailstic/6.png")}
            /> :
            imageNumber === 7 ? 
            <ViroImage
              scale={[.147, .2079, 0]}
              position={[0, 0.0001, 0]}
              rotation={[-90, -90, 0]}
              source={require("./res/cat/reailstic/7.png")}
            /> :
            null
          }
        {/* {!imageNumber === 1 ? (
          <ViroImage
            scale={[.147, .2079, 0]}
            position={[0, 0.0001, 0]}
            rotation={[-90, -90, 0]}
            source={require("./res/cat/reailstic/1.png")}
          />
        ):(
          <ViroImage
            scale={[.147, .2079, 0]}
            position={[0, 0.0001, 0]}
            rotation={[-90, -90, 0]}
            source={require("./res/cat/reailstic/2.png")}
          />
        )} */}
        {/* {
          this.props.imageNumber === 1 ? 
          <ViroImage
            scale={[.147, .2079, 0]}
            position={[0, 0.0001, 0]}
            rotation={[-90, -90, 0]}
            source={require("./res/cat/reailstic/1.png")}
          /> :
          <ViroImage
            scale={[.147, .2079, 0]}
            position={[0, 0.0001, 0]}
            rotation={[-90, -90, 0]}
            source={require("./res/cat/reailstic/5.png")}
          />
        } */}
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
    source: require('./res/targetOne.jpg'),
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

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});


module.exports = HelloWorldSceneAR;
