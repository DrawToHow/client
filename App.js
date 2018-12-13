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
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

import renderIf from './js/helpers/renderIf';
var InitialARScene = require('./js/HelloWorldAR');

// Array of 3d models that we use in this sample. This app switches between this these models.
var objArray = [
  require('./js/res/coffee_mug/object_coffee_mug.vrx'),
  require('./js/res/object_flowers/object_flowers.vrx'),
  require('./js/res/emoji_smile/emoji_smile.vrx')];

export default class ViroSample extends Component {
  constructor() {
    super();

    this._onShowObject = this._onShowObject.bind(this);
    this._renderTrackingText = this._renderTrackingText.bind(this);
    this._onTrackingInit = this._onTrackingInit.bind(this);
    this._onDisplayDialog = this._onDisplayDialog.bind(this);
    this._onLoadStart = this._onLoadStart.bind(this);
    this._onLoadEnd = this._onLoadEnd.bind(this);

    this.state = {
      viroAppProps: {imageNumber : 1,displayObject:false, objectSource:objArray[0], yOffset:0, _onLoadEnd: this._onLoadEnd, _onLoadStart: this._onLoadStart, _onTrackingInit:this._onTrackingInit},
      trackingInitialized: false,
      isLoading: false,
      imageNumber : 1
    }
  }

  componentDidMount() {
    this.setState({
      imageTrace: './js/res/cat/reailstic/1.png'
    })
  }

  previous = () => {
    this.setState({
      ...this.state,
      viroAppProps : {...this.state.viroAppProps,imageNumber: this.state.viroAppProps.imageNumber - 1 } 
    })
    alert(this.state.viroAppProps.imageNumber)
  }

  next = () => {
    this.setState({
      ...this.state,
      viroAppProps : {...this.state.viroAppProps,imageNumber: this.state.viroAppProps.imageNumber + 1 } 
    })
    alert(this.state.viroAppProps.imageNumber)
  }

  render() {
    return (
      <View style={localStyles.outer} >
        <ViroARSceneNavigator style={localStyles.arView} apiKey="836B1D24-5AEB-425C-AC0E-B5CCE5CC1D32"
          initialScene={{scene:InitialARScene, passProps:{displayObject:this.state.displayObject}}}
          viroAppProps={this.state.viroAppProps}
          // imageNumber={this.state.imageNumber}
        />

        {this._renderTrackingText()}

        {renderIf(this.state.isLoading,
          <View style={{position:'absolute', left:0, right:0, top:0, bottom:0, alignItems: 'center', justifyContent:'center'}}>
            <ActivityIndicator size='large' animating={this.state.isLoading} color='#ffffff'/>
          </View>)
        }

        <View style={{position: 'absolute',  left: 0, right: 0, bottom: 77, alignItems: 'center'}}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
      
            <TouchableHighlight style={localStyles.buttons}
              // onPress={this._onDisplayDialog}
              underlayColor={'#00000000'}
              onPress={this.previous} >
              <Text>PREV</Text>
            </TouchableHighlight>

            <TouchableHighlight style={localStyles.buttons}
              onPress={this.next}
              underlayColor={'#00000000'} >
              <Text>NEXT</Text>
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

  _renderTrackingText() {
    if(this.state.trackingInitialized) {
      return (
        <View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 30, right: 30, top: 30, alignItems: 'left'}}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._onDisplayDialog}
            underlayColor={'#00000000'} >
            <Image source={require("./js/res/btn_mode_objects.png")} />
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View style={{position: 'absolute', backgroundColor:"#ffffff22", left: 10, right: 10, top:10, alignItems: 'flex-start'}}>
          <TouchableHighlight style={localStyles.buttons}
            onPress={this._onDisplayDialog}
            underlayColor={'#00000000'} >
            <Image source={require("./js/res/btn_mode_objects.png")} />
          </TouchableHighlight>
        </View>
      );
    }
  }

  _onTrackingInit() {
    this.setState({
      trackingInitialized: true,
    });
  }

  _onDisplayDialog() {
    Alert.alert(
    'Choose an object',
    'Select an object to place in the world!',
    [
      {text: 'Coffee Mug', onPress: () => this._onShowObject(0, "coffee_mug", 0)},
      {text: 'Flowers', onPress: () => this._onShowObject(1, "flowers", .290760)},
      {text: 'Smile Emoji', onPress: () => this._onShowObject(2, "smile_emoji", .497823)},
    ],
    );
  }

  _onShowObject(objIndex, objUniqueName, yOffset) {
    this.setState({
        viroAppProps:{...this.state.viroAppProps, displayObject: true, yOffset: yOffset, displayObjectName: objUniqueName, objectSource:objArray[objIndex]},
    });
  }
}

var localStyles = StyleSheet.create({
  outer : {
    flex : 1,
  },

  arView: {
    flex:1,
  },

  buttons : {
    height: 80,
    width: 80,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#00000000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ffffff00',
    backgroundColor: "#ffffff22", 
    top: 30
  }
});

module.exports = ViroSample
