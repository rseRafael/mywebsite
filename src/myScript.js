import React, {Component} from 'react';
import {Home} from './MyComponents/HomeComponent.js';
import {About} from './MyComponents/AboutComponent.js';
import {NavBar, navObj} from './MyComponents/NavigationBarComponent.js';
import {Forms} from './myComponents';
import './BodyStyle.css';
export default class WebSite extends Component{
  render(){
    return(
        <body className="webSiteBody">
          <Home />
          <NavBar />
          <About />
          <div className="container" id="Portfolio">
            <p className="title">Personal and Payed Works</p>
            <p>{console.log(typeof navObj)}</p>
          </div>
          <Forms />
        </body>
    );
  }
}
