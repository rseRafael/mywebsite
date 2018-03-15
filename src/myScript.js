import React, {Component} from 'react';
import {Home} from './MyComponents/HomeComponent.js';
import {About} from './MyComponents/AboutComponent.js';
/*import {NavBar} from './MyComponents/NavigationBarComponent.js';*/
import {Portfolio} from './MyComponents/PortfolioComponent.js';
import {Contact} from './MyComponents/ContactComponent.js'
import './BodyStyle.css';
export default class WebSite extends Component{
  render(){
    return(
        <body className="webSiteBody">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </body>
    );
  }
}
