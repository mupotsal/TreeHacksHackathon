
import React from "react";
import { render } from "react-dom";
// import './App.css';
// get our fontawesome imports
import './Home.css';
import postPage from '../../postPage'

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>



// Function for button
// function handleNewButton() {
//   console.log('this is my new button');
// }

// create our Ho




class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <html>
        <div>

          <body className="Home">


            <header className="showcase">
              <h1>
                {/* // Create User icon */}

                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: 'blue' }}
                  size="lg"
                  mask={['fas', 'circle']}
                  transform="grow-50 right-1080 down-35.2"
                  fixedWidth />

                <a className="Button5" href="#Loginbackground" target="_blank">Log Out</a><br></br>

                <a className="Button4" href="https://www.parents.com/fun/arts-crafts/kid/" target="_blank">Profile</a><br></br>

              </h1>



              <h2 className="header1">
                HOME
              </h2>

                <a className="Button1" href="https://www.websudoku.com/" target="_blank">Play a Game</a><br></br>

                <div>
                <p> Is this going to work?</p>
                <postPage></postPage>
                </div>


                <div>
                  What is Happening here?
                </div>


                <a className="Button3" href="https://www.parents.com/fun/arts-crafts/kid/" target="_blank">Arts and Crafts</a><br></br>
            </header>








          <div className="container">
            <div className="image-gallery">

              <a href="images/img-1.jpg" className="img-1">
                <i className="icon ion-md-expand"></i>
              </a>\

              <a href="img-2.jpeg" className="img-2">
                  <i className="icon ion-md-expand"></i>
                </a>


              <a href="images/img-3.jpg" className="img-3">
                <i class="icon ion-md-expand"></i>
              </a>

              <a href="images/img-4.jpg" className="img-4">
                <i className="icon ion-md-expand"></i>
              </a>

              <a href="images/img-4.jpg" className="img-5">
                <i className="icon ion-md-expand"></i>
              </a>

              <a href="images/img-6.jpg" className="img-6">
                <i className="icon ion-md-expand"></i>
              </a>

              <a href="images/img-7.jpg" className="img-7">
                <i className="icon ion-md-expand"></i>
              </a>

              <a href="images/img-8.jpg" className="img-8">
                <i className="icon ion-md-expand"></i>
              </a>
            </div>
          </div>





            <div className="container1">
              <div className="image-gallery1">
                <a href="images/img-1.jpg" className="img-1">
                  <i className="icon ion-md-expand"></i>
                </a>\

              <a href="img-2.jpeg" className="img-2">
                  <i className="icon ion-md-expand"></i>
                </a>


                <a href="images/img-3.jpg" className="img-3">
                  <i class="icon ion-md-expand"></i>
                </a>

                <a href="images/img-4.jpg" className="img-4">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-4.jpg" className="img-5">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-6.jpg" className="img-6">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-7.jpg" className="img-7">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-8.jpg" className="img-8">
                  <i className="icon ion-md-expand"></i>
                </a>
              </div>

          </div>





            <div className="container2">
              <div className="image-gallery2">
                <a href="images/img-1.jpg" className="img-1">
                  <i className="icon ion-md-expand"></i>
                </a>\

              <a href="img-2.jpeg" className="img-2">
                  <i className="icon ion-md-expand"></i>
                </a>


                <a href="images/img-3.jpg" className="img-3">
                  <i class="icon ion-md-expand"></i>
                </a>

                <a href="images/img-4.jpg" className="img-4">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-4.jpg" className="img-5">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-6.jpg" className="img-6">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-7.jpg" className="img-7">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-8.jpg" className="img-8">
                  <i className="icon ion-md-expand"></i>
                </a>


              </div>

            </div>




            <div className="container3">
              <div className="image-gallery3">
                <a href="images/img-1.jpg" className="img-1">
                  <i className="icon ion-md-expand"></i>
                </a>\

              <a href="img-2.jpeg" className="img-2">
                  <i className="icon ion-md-expand"></i>
                </a>


                <a href="images/img-3.jpg" className="img-3">
                  <i class="icon ion-md-expand"></i>
                </a>

                <a href="images/img-4.jpg" className="img-4">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-4.jpg" className="img-5">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-6.jpg" className="img-6">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-7.jpg" className="img-7">
                  <i className="icon ion-md-expand"></i>
                </a>

                <a href="images/img-8.jpg" className="img-8">
                  <i className="icon ion-md-expand"></i>
                </a>

              </div>

            </div>

          </body>
        </div>
      </html>



    );
  }
}

export default Home;
