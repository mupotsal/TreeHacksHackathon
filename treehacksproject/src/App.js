import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase"


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
    return (
      <html>
        <title>Boogaloo Login</title>
          <body>



            <div class="WelcomeFormat">
              <h1>Welcome to Boogaloo!</h1>
              <i>Keeping commutities connected</i>
            </div>

            <div class="Login">
              <form>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label class="box" for="ID">ID:</label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"></input>
                <br></br>
                <label class="box" for="Password:">Password:</label>
                <input type="text"></input>
                <br></br>
                <button class="but" type="button" name="LoginButton">Login</button>

              </form>

            </div>

          </body>
      </html>

    );
  }
}


export default App;
