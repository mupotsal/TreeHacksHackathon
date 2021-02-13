import React, {Component} from 'react';
import logo from './logo.svg';
import './Login.css';
import Settings from './Settings.js'
import Login from './Login.js'


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
        <Login>
        </Login>
        <Settings>
        </Settings>

      </html>

    );
  }
}


export default App;
