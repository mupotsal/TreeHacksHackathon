import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/storage'
require('firebase/auth')

var firebaseConfig = {
  apiKey: "AIzaSyD-l95rGx_4KTY4cAgfd3ILkpTap2q9tho",
  authDomain: "treehacksproject-f586f.firebaseapp.com",
  databaseURL: "https://treehacksproject-f586f-default-rtdb.firebaseio.com",
  projectId: "treehacksproject-f586f",
  storageBucket: "treehacksproject-f586f.appspot.com",
  messagingSenderId: "658140414882",
  appId: "1:658140414882:web:2ebea7d9ed54bfeb91a8fb",
  measurementId: "G-VH9S0E5MHL"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const firebaseAppAuth = firebaseApp.auth();
const storage = firebaseApp.storage();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


export {
  providers, storage, firestore, firebaseAppAuth, firebaseApp as default
}
//export default firebaseConfig;
