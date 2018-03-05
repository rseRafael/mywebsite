import React, {Component} from 'react';
import './style.css';
import {Home, About, NavBar} from './myComponents';

var Wait = function(miliseconds){
  var d = new Date();
  do{}while(new Date() - d <= miliseconds);
};

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
          </div>

          <div className="container" id="Contact">
          </div>
        </body>
        <footer>
        </footer>
      </html>

    );
  }
}
