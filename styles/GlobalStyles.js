import { StyleSheet } from "react-native";

import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

export default styles = StyleSheet.create({
  AnimationOpeningText: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    color: '#BA0000'
  },

  defaultView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#ffffff'
  },

  LandingPageView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  LandingPageMain: {
    fontSize: 48,
    color: '#191919',
    fontFamily: 'Helvetica',
    fontWeight: '200',
    marginBottom: 30
  },

  LandingPageMainNoMargin: {
    fontSize: 48,
    color: '#191919',
    fontFamily: 'Helvetica',
    fontWeight: '200'
  },

  LandingPageSecondary: {
    fontSize: 18,
    color: '#C2CBCA',
    fontFamily: 'Helvetica',
    fontWeight: '200'
  },

  LandingPageQuotes: {
    fontSize: 14,
    color: '#BA0000',
    fontFamily: 'Helvetica',
    fontWeight: '200',
    fontStyle: 'italic',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },

  LandingPageBottom: {
  },

  LandingPageMid: {
    alignItems: 'center',
  },

  RegisterForm: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    height: 50, 
    width: 300,
    marginBottom: 30,
    borderColor: '#DCE4E4', 
    borderWidth: 2.5,
    paddingHorizontal: 20
  },

  RegisterText: {
    fontSize: 24,
    color: '#191919',
    fontFamily: 'Helvetica',
    fontWeight: '200',
    marginBottom: 30,
    marginTop: 80,
    marginBottom: 50
  },

  RegisterSecondary: {
    fontSize: 15,
    color: '#C2CBCA',
    fontFamily: 'Helvetica',
    fontWeight: '200',
    paddingLeft: 60,
    paddingRight: 60,
    marginBottom: 30
  },

  registerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff'
  },

  signInText: {
    fontSize: 24,
    color: '#191919',
    fontFamily: 'Helvetica',
    fontWeight: '200',
    marginBottom: 30,
    marginTop: 145,
    marginBottom: 50
  },

  difficultySelectorMain: {
    fontSize: 36,
    color: '#191919',
    fontFamily: 'Helvetica',
    fontWeight: '200',
    marginBottom: 30
  },

  difficultySelectorDisabled: {
    fontSize: 36,
    color: '#DCE4E4',
    fontFamily: 'Helvetica',
    fontWeight: '200',
    marginBottom: 30
  },

  difficultySelectorDisabledLast: {
    fontSize: 36,
    color: '#DCE4E4',
    fontFamily: 'Helvetica',
    fontWeight: '200',
  },

  difficultySelectorBottom: {
    fontSize: 14,
    color: '#191919',
    fontFamily: 'Helvetica',
    fontWeight: '200',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },

  sketchSelectorImageTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },

  sketchSelectorImageText: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },

  sketchSelectorMid: {
    alignItems: 'center',
    marginTop: 50
  },

  coreARModal: {
    backgroundColor: 'rgba(26, 26, 26, 0.45)',

  }


});