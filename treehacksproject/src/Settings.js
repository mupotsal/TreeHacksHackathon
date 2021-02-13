import React, {Component} from 'react';
import logo from './logo.svg';
import './Settings.css';




class Settings extends Component {

  render() {
    return (
      <html>
        <title>Settings</title>
          <body class="SettingsBackground">

            <div class="AboutMe">
              <h3>About Me</h3>
                <img src="ProfilePicture.png"></img>
              <br></br>
              <input class="AboutMeInfo" type="text"></input>
            </div>

          </body>
      </html>

    );
  }
}


export default Settings;
