import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA2NT7zgNRF9Kzv3OOUwJjw72JNl2S5Egs",
    authDomain: "myexample-80e88.firebaseapp.com",
    databaseURL: "https://myexample-80e88.firebaseio.com",
    projectId: "myexample-80e88",
    storageBucket: "myexample-80e88.appspot.com",
    messagingSenderId: "216354619274"
  };

export const firebaseApp = firebase.initializeApp(config);