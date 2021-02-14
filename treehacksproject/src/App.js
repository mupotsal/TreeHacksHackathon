
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "react-dom";
import Home from "./components/Home/Home.js"



//The following part does the Google Authentication for Login
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase';
import firebaseConfig from './firebase';
import 'firebase/firestore'
require('firebase/auth')
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class App extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: "" };
  }
  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
      this.callAPI();
  }

  render() {

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <html>
        <title>Boogaloo Login</title>

        <body class="Loginbackground">



            <div class="WelcomeFormat">
              <h1>Welcome to Boogaloo!</h1>
              <i>Keeping commutities connected</i>
              {
                user
                  ? <button onClick={signOut}>Sign out</button>
                  : <button onClick={signInWithGoogle}>Sign in with Google</button>


              }
            </div>

            <div class="Login">
            <div className="App">
          {

            user
              ? <p> <Home></Home> </p>
              : <p>Please sign in.</p>
          }


        <div>
        </div>
      </div>

            </div>

          </body>
      </html>

    );
  }
}

export default withFirebaseAuth({providers,
  firebaseAppAuth,})(App);
