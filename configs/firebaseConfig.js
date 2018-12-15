import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC0ISoe1IOEd_woUv_Kf23JH_Dt79YfJ3I",
    authDomain: "draw-to-how.firebaseapp.com",
    databaseURL: "https://draw-to-how.firebaseio.com",
    projectId: "draw-to-how",
    storageBucket: "draw-to-how.appspot.com",
    messagingSenderId: "515060782044"
  };
  
 firebase.initializeApp(config);
 export default firebase


