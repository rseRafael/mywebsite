import React, {Component} from 'react';
import './style.css';
import {Home, About, NavBar, Forms} from './myComponents';

export default class WebSite extends Component{
  render(){
    return(
      <html>
        <head>
          <title>Rafael Santos</title>
          </head>
        <body>
          <Home />
          <NavBar />
          <About />
          <div className="container" id="Portfolio">
            <p className="title">Personal and Payed Works</p>
          </div>

          <Forms />
        </body>
        <footer>
          <p></p>
        </footer>
      </html>

    );
  }
}
