import React, {Component} from 'react';

import './BodyStyle.css';

class NavBar extends Component{
  Func(){
    var docElem = document.documentElement;
    var divs = [
      document.getElementById("Home").clientHeight,
      document.getElementById("naviBar").clientHeight,
      document.getElementById("About").clientHeight,
      document.getElementById("Portfolio").clientHeight,
      document.getElementById("Contact").clientHeight,
    ];
    var links =[
      document.getElementById("homeLink"),
      document.getElementById("aboutLink"),
      document.getElementById("portfolioLink"),
      document.getElementById("contactLink"),
    ];
    var getElem = function(x){
      return document.getElementById(x);
    };
    window.onscroll = () =>{
      var Elem;
      if( 0 <= docElem.scrollTop &&  docElem.scrollTop <= divs[0]){
        Elem = getElem("homeLink");
        console.log("you are at Home");
      }
      else if( divs[0] < docElem.scrollTop  &&  docElem.scrollTop <= divs[0] + divs[1]){
        /*Do nothing*/
        Elem = getElem("aboutLink");
        console.log("you are at nav");
      }
      else if( divs[0] + divs[1] < docElem.scrollTop &&  docElem.scrollTop <= divs[0] + divs[1] + divs[2]){
        Elem = getElem("aboutLink");
        console.log("you are at about");
      }
      else if( divs[0] + divs[1] + divs[2] < docElem.scrollTop &&  docElem.scrollTop <= divs[0] + divs[1] + divs[2] + divs[3]){
        Elem = getElem("portfolioLink");
        console.log("you are at portfolio");
      }
      else if(divs[0] + divs[1] + divs[2] + divs[3] < docElem.scrollTop &&  docElem.scrollTop <= divs[0] + divs[1] + divs[2] + divs[3] + divs[4]){
        Elem = getElem("contactLink");
        console.log("you are at Contact");
      }
      for(var i = 0; i< links.length; i++){
        if(links[i] !== Elem){
          links[i].className = links[i].classList[0];
        }
      }
      if(Elem && Elem.classList.length < 2){
        Elem.className += " active";
      }

    }
  }
  componentDidMount(){
    this.Func();
  }
  render(){
    return(
      <div className="navigationBar" id="naviBar">
        <div className="navBox">
          <p id="navBar"><a className="navBar" id="homeLink" href="#Home">Home</a></p>
          <p id="navBar"><a className="navBar" id="aboutLink" href="#About">About</a></p>
          <p id="navBar"><a className="navBar" id="portfolioLink" href="#Portfolio">Portfolio</a></p>
          <p id="navBar"><a className="navBar" id="contactLink" href="#Contact">Contact</a></p>
        </div>
      </div>
    )
  }
}
/*
class About extends Component{
  render(){
    return(
      <div className="container" id="About">
        <p id="about">About</p>
        <div className="container" id="images">
          <img src={js_logo}  className="image" alt="javascript"/>
          <img src={html_logo}  className="image" alt="html"/>
          <img src={css_logo}  className="image" alt="css"/>
          <img src={react_logo}  className="image" alt="react"/>
          <img src={node_logo}  className="image" alt="node"/>
          <img src={py_logo} className="image" alt="python"/>
        </div>

      </div>
    )
  }
}*/
class InputBox extends Component{
  constructor(props){
    super(props);
    this.state = {text:this.props.value,};
  }
  componentDidMount(){
    console.log("okey");
    console.log(this.props);
    console.log(this.props.type, this.props.name, this.props.id);
  }

  render(){
    return(
      <input value={this.state.text}/>
    );
  }

}

class Forms extends Component{
  render(){
    return(
      <div className="container" id="Contact">
        <form className="contactForm">
          <div className="form">
            <div className ="inputForm">
              <p>Name:</p>
              <input className= "inputBox" type="text"/>
            </div>
            <div className="inputForm">
              <p>Email Adress:</p>
              <input className= "inputBox" type="text"/>
            </div>
            <div className ="inputForm">
              <p>Phone number:</p>
              <input className= "inputBox" type="text"/>
            </div>
            <div className="inputForm">
              <p>Website:</p>
              <input className= "inputBox" type="text"/>
            </div>
          </div>
          <div className="form">
            <p>How can i help you?</p>
            <input className="inputBox" type="text"/>
            <InputBox value="FuckThis"/>
          </div>
        </form>
      </div>
    );
  }
}
export { NavBar,  Forms};
