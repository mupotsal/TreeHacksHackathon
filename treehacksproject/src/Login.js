import React, {Component} from 'react';
import logo from './logo.svg';
import './Login.css';




class Login extends Component {

  render() {
    return (


            <html>
              <title>Boogaloo Login</title>
                <body class="LoginBackground">



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


export default Login;
