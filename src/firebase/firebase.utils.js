// Firebase settup 
import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';

// Firebase configuration

const config = {
    apiKey: "AIzaSyBRAwMUGNNK-hWltAcdFWiDBGynhJXozp8",
    authDomain: "fashion-store-zans.firebaseapp.com",
    databaseURL: "https://fashion-store-zans.firebaseio.com",
    projectId: "fashion-store-zans",
    storageBucket: "",
    messagingSenderId: "784965063876",
    appId: "1:784965063876:web:076911e7b67404cc"
  };

  // Init Firebase 

  firebase.initializeApp(config);

  // Exports

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Google auth 

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({promt:'select_account'}); 
  
  export const signInWithGoogle = () => auth.signInWithGoogle(provider); // signIn with Google Popup

  export default firebase;

