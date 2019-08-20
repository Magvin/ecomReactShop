// Firebase settup 
import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';
import 'firebase/firestore';


// Firebase configuration

const config = {
  apiKey: "AIzaSyCJuejGNav3UYCYnnYSyoQGUzKbV7jjJxg",
  authDomain: "adressbook-6ca18.firebaseapp.com",
  databaseURL: "https://adressbook-6ca18.firebaseio.com",
  projectId: "adressbook-6ca18",
  storageBucket: "adressbook-6ca18.appspot.com",
  messagingSenderId: "599856476874",
  appId: "1:599856476874:web:fa59251bd8685132"
  };

  // Init Firebase 

  firebase.initializeApp(config);

  // Exports

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // Google auth 

  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({promt:'select_account'}); 
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider) // signIn with Google Popup

  export default firebase;

