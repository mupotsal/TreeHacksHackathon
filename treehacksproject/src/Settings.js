import React, {Component} from 'react';
import logo from './logo.svg';
import './Settings.css';




class Settings extends Component {

  render() {
    return (
      <html>
        <title>Settings</title>
          <body className="AboutMeInfo">

            <div>
              <h2>About Me</h2>
              <br></br>
            <div>
              <a href="LinkToProfilePicUpload">
                <img className="ProfilePicture" src={require("./Images/ProfilePicture.png").default} height={200} width={200}></img>
              </a>
              </div>
              <br></br>
                <input className="Info" type="text"></input>
              <br></br>
              <br></br>
              <button className="Submit" type="button" name="SubmitButton">Submit</button>
              <br></br>

              <div>
                <br></br>
                <button onclick="MainPage.js" className="NavigationButtons" type="button" name="MainPageButton"><a href="MainPage.js">Main Page</a></button>
                <br></br>
                <br></br>
                <button onclick="Login.js" className="NavigationButtons" type="button" name="Logout"><a href="#Login">Logout</a></button>
              </div>

            </div>
          </body>
      </html>

    );
  }
}


export default Settings;
