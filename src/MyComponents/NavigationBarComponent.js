import React, {Component} from 'react';
import './NavBarStyle.css';

var navObj= Object();

class NavBar extends Component{
  componentDidMount(){

    navObj={
        self: document.getElementById('navBar'),

        divs:[
          document.getElementById("Home").clientHeight,
          document.getElementById("About").clientHeight,
          document.getElementById("Portfolio").clientHeight,
          document.getElementById("Contact").clientHeight,
        ],

        links:[
          document.getElementById("homeLink"),
          document.getElementById("aboutLink"),
          document.getElementById("portfolioLink"),
          document.getElementById("contactLink"),
        ],

        deactivateLinks:function(){
          for(var i = 0; i < navObj.links.length; i++){
            navObj.links[i].className = navObj.links[i].classList[0];
          }
        },

        activateLink: function(element){
          element.className += " activatedLink";
        },

        lastScroll: null,

        currentScroll: null,

        isComingDown: function(){
          if(navObj.lastScroll !== null && navObj.currentScroll !== null){
            if(navObj.lastScroll < navObj.currentScroll){
              return true;
            }
            else{
              return false;
            }
          }
          else{
            return false;
          }
        },

    }
    window.onscroll = ()=>{
      if(document.documentElement.scrollTop === 0 && navObj.self.classList.length > 1){
        navObj.self.className = navObj.self.classList[0];
      }
      if(document.documentElement.scrollTop >= navObj.divs[0] && navObj.self.className.search('activatedBar') === -1){
        navObj.self.className += ' activatedBar';
      }
      navObj.deactivateLinks();
      if( 0 <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divs[0]){
        navObj.activateLink(document.getElementById('homeLink'));
      }
      else if( navObj.divs[0] <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divs[0] + navObj.divs[1] - navObj.self.clientHeight){
        navObj.activateLink(document.getElementById('aboutLink'));
      }
      else if( navObj.divs[0] + navObj.divs[1] - navObj.self.clientHeight <= document.documentElement.scrollTop && document.documentElement.scrollTop <= navObj.divs[0] + navObj.divs[1] + navObj.divs[2] - navObj.self.clientHeight){
        navObj.activateLink(document.getElementById('portfolioLink'));
      }
      else if( navObj.divs[0] + navObj.divs[1] +navObj.divs[2] - navObj.self.clientHeight <= document.documentElement.scrollTop && document.documentElement.scrollTop <= navObj.divs[0] + navObj.divs[1] + navObj.divs[2] + navObj.divs[3] - navObj.self.clientHeigh){
        navObj.activateLink(document.getElementById('contactLink'));
      }
    }
  }
  render(){
    return(
      <div className="navBarDiv" id="navBar">
        <a className="linkText" href="#Home" id="homeLink">Home</a>
        <a className="linkText" href="#About" id="aboutLink">About</a>
        <a className="linkText" href="#Portfolio" id="portfolioLink">Portfolio</a>
        <a className="linkText" href="#Contact" id="contactLink">Contact</a>
      </div>
    );
  }
}

export{NavBar, navObj};
