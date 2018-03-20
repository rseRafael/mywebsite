import React, {Component} from 'react';
import './AboutStyle.css';
import js_logo from '../images/js_logo.png';
import html_logo from '../images/html_logo.png';
import css_logo from '../images/css_logo.png';
import react_logo from '../images/react_logo.svg';
import node_logo from '../images/node_logo.jpg';
import py_logo from '../images/python_logo.jpg';
import {navObj, goTo} from './NavigationBarComponent.js';

var imgHeight, imgWidth, rateHeight;

class Image extends Component{
  constructor(props){
    super(props);
    this.rate = {
      'one': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
              </div>),
      'two': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
              </div>),
      'three': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
              </div>),
      'four': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate" ></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate" ></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
              </div>),
      'four-and-a-hald':(<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                            <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                            <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                            <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                            <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                            <i className="fas fa-star" style={{  color: "rgba(0,0,0,0.5)"}} id="iconRate"></i>
                         </div>),
      'five': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
                <i className="fas fa-star" style={{  color: "rgb(255, 215, 7)"}} id="iconRate"></i>
              </div>),
    }
  }

  getRateHeight(){
    if(document.getElementById(this.props.imgId + "Rate")!== "none"){
      rateHeight = document.getElementById(this.props.imgId + "Rate").clientHeight;
    };
    return rateHeight;
  }
  getImgSize(){
    imgHeight = document.getElementById(this.props.imgId).clientHeight;
    imgWidth = document.getElementById(this.props.imgId).clientWidth;
  }

  componentDidMount(){
    //this.props.rateId = this.props.imgId;
    document.getElementById(this.props.imgId).onmouseover = ()=>{
      try{
        document.getElementById(this.props.imgId + "Rate").className += " imgActived";
        this.getImgSize();
        document.getElementById(this.props.imgId).style.height =  String(imgHeight - this.getRateHeight()  ) + "px";
        document.getElementById(this.props.imgId).style.width =  String(imgWidth - this.getRateHeight()  ) + "px";
      }
      catch(e){
        console.log("Error whith mouseouver", e);
        //do nothing
      }
    }
    document.getElementById(this.props.imgId).onmouseout = ()=>{
      try{
        document.getElementById(this.props.imgId + "Rate").className = document.getElementById(this.props.imgId + "Rate").classList[0];
        document.getElementById(this.props.imgId).style.height =  null;
        document.getElementById(this.props.imgId).style.width =  null;
      }
      catch(e){
        console.log("Error whith mouseout", e);
        //do nothing
      }
    }
  }
  render(){
    return(
      <div className="imgDiv">
          <img className="imageSettings"src={this.props.imgSrc} alt={this.props.imgAlt} id={this.props.imgId}/>
          {this.rate[this.props.rate]}
      </div>
    )
  }
}



class About extends Component{

  constructor(props){
    super(props);
    this.state={width:document.documentElement.offsetWidth + 15 }
  }

  componentDidMount(){
    this.clockOne = setInterval(
      ()=>{
        this.setState({width: document.documentElement.offsetWidth + 15});
      },
      50
    );
    document.getElementById('clickMoreAbout').onclick = () =>{
      console.log(navObj.divHeight[0] + Math.round(navObj.divHeight[1]/2) - navObj.self.clientHeight);
      goTo(navObj.divHeight[0] + Math.round(navObj.divHeight[1]/2) - navObj.self.clientHeight);
    };
  }

  componentWillUnmount(){
    clearInterval(this.clockOne);
  }

  render(){
    return(
      <div className="AboutDiv" id="About">

          <div className="softwareAbout">
              <p className="aboutParagraph" >Skills</p>
              <div className="imageRow">
                <div className = "imageHolder"><Image imgSrc={js_logo} imgAlt={"Javascript"} imgId={"jsLogo"} rate={"four"}/></div>
                <div className = "imageHolder"><Image imgSrc={html_logo} imgAlt={"HTML"} imgId={"htmlLogo"} rate={"four"}/></div>
                <div className = "imageHolder"><Image imgSrc={css_logo} imgAlt={"CSS"} imgId={"cssLogo"} rate={"four"}/></div>
              </div>
              <div className="imageRow bottomBorder">
                <div className = "imageHolder"><Image imgSrc={react_logo} imgAlt={"React and React Native"} imgId={"reactLogo"} rate={"three"}/></div>
                <div className = "imageHolder"><Image imgSrc={node_logo} imgAlt={"Node.JS"} imgId={"nodejsLogo"} rate={"one"}/></div>
                <div className = "imageHolder"><Image imgSrc={py_logo} imgAlt={"Python 2 & 3"} imgId={"pyLogo"} rate={"three"}/></div>
              </div>
              <div id="clickMoreAbout">
                <div id="roundDivAboutOne"></div>
                <p>Know More</p>
                <div id="roundDivAboutTwo"></div>
              </div>
          </div>

          <div className="meAbout" id="moreAboutMe">
            <img className="imageMeAbout" src="" alt="" />
            <p id="meAboutHeader">{`Who am i ?`}</p>
            <p className="textMeAbout">
              <p>
                {`I'm a software developer who lives in Rio de janeiro, Brazil. I have a passion that ranges from User Interfaces to backend server programming.`}
                <br/>
                {`Currently i'm studying computer science at `}
              <a href="https://www.google.com/ufrj">Ufrj</a>
              </p>
              <a href="">{`Let me help you.`}</a>
            </p>
          </div>
      </div>

    );
  }

}

export {About};
