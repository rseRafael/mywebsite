import React, {Component} from 'react';
import js_logo from './images/js_logo.png';
import html_logo from './images/html_logo.png';
import css_logo from './images/css_logo.png';
import react_logo from './images/react_logo.svg';
import node_logo from './images/node_logo.jpg';
import py_logo from './images/python_logo.jpg';
import './style.css';


class Home extends Component{
  constructor(props){
    super(props);
    this.obj={
      words: ["WebSites", "Web Applications", "Front-end Development", "Backend Development", ],
      index: 0,
      index2: 0,
      text: "",

    };
    this.state={text: "", dot: ""};
  }
  componentDidMount() {
    this.funcOne = setInterval(
      ()=>{
        this.check();
      },
      2000
    );
    this.funcTwo = setInterval(
      ()=>{
        this.outDoor();
      },
      50
    );
  }
  componentWillUnmount() {
    clearInterval(this.outDoor);
    clearInterval(this.funcOne);
    clearInterval(this.funcTwo);
  }
  check(){
    if(this.obj.index2 >= this.obj.words[this.obj.index].length){
      this.obj.index2 = 0;
      this.obj.index++;
      this.obj.text =String(" ");
      this.setState({dot:" "});
      this.setState({text:this.obj.text});
    }
    if(this.obj.index >= this.obj.words.length){
      this.obj.index = 0;
    }
  }
  outDoor(){
    if(this.obj.index2 === this.obj.words[this.obj.index].length){
      this.setState({dot: "."});
    }
    else if(this.obj.index2 > this.obj.words[this.obj.index].length){
      //do nothing
      document.getElementById("dot").style.borderWidth = "10px";

    }
    else{
      this.obj.text += this.obj.words[this.obj.index][this.obj.index2++];
      this.setState({text:this.obj.text});
    }
  }


  render(){
    return(
      <div className="container" id="Home">
        <div className="outDoor">
          <p id="Home">{`Hello, I'm `}<span id="Home">{'Rafael Santos'}</span>. {`I'm a software developer.`}</p>
          <div id="rowHome">
            <p>{`I work with:`}</p>
            <p id="space"> </p>
            <p id="works">{this.state.text}</p>
            <p id="dot">{this.state.dot}</p>
          </div>
         </div>
      </div>
    );
  }
}
class NavBar extends Component{
  Func(){
    var body = document.body;
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
        if(links[i] != Elem){
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
}
class InputBox extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    console.log("okey");
    console.log(this.props);
    console.log(this.props.type, this.props.name, this.props.id);
  }

  render(){
    return(
      <input />
    );
  }

}

class Forms extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container" id="Contact">
        <p>Do you want to hire me ?</p>
        <form /*className="formContainer"*/>
          <InputBox Value="*Name" type="text" name="firstname" id="fname"/>
          <input id="eba" type="text"  value={"fuck"} />
          <input type="text" value="lastName" id="inputStyle"></input>
        </form>
        <form>
          <input></input>
          <input></input>
        </form>
      </div>
    );
  }
}
export {Home, NavBar, About, Forms};
