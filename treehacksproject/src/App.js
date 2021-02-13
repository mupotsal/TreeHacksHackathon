import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase"

import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase';
import firebaseConfig from './firebase';


require('firebase/auth')


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
          <body>



            <div class="WelcomeFormat">
              <h1>Welcome to Boogaloo!</h1>
              <i>Keeping commutities connected</i>
            </div>

            <div class="Login">
            <div className="App">
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
      </div>

            </div>

          </body>
      </html>

    );
  }
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


export default withFirebaseAuth({providers,
  firebaseAppAuth,})(App);
