import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFhLMD_-xJ7uwrMs1l-poCuA_DOqF_RSw",
    authDomain: "tutorator-fd7da.firebaseapp.com",
    databaseURL: "https://tutorator-fd7da.firebaseio.com",
    projectId: "tutorator-fd7da",
    storageBucket: "tutorator-fd7da.appspot.com",
    messagingSenderId: "526759876171"
  };
  firebase.initializeApp(config);


  export default firebase;