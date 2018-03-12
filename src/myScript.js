import React, {Component} from 'react';
import './BodyStyle.css';
import {Home} from './MyComponents/HomeComponent.js';
import {About} from './MyComponents/AboutComponent.js';
import {NavBar, Forms} from './myComponents';

export default class WebSite extends Component{
  render(){
    return(
        <body>
          <Home />
          <NavBar />
          <About />
          <div className="container" id="Portfolio">
            <p className="title">Personal and Payed Works</p>
          </div>

          <Forms />
          <div className="">
          </div>
        </body>
    );
  }
}
