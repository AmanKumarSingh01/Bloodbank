import  firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyC_IPjgBbZvSjYfwbULurKJDlRqI2wwL2I",
    authDomain: "bloodbank-f7eb0.firebaseapp.com",
    databaseURL: "https://bloodbank-f7eb0.firebaseio.com",
    projectId: "bloodbank-f7eb0",
    storageBucket: "bloodbank-f7eb0.appspot.com",
    messagingSenderId: "1003747960451",
    appId: "1:1003747960451:web:db41c9d2b17406c2af9db6"
  };


  firebase.initializeApp(Config);

export default firebase;