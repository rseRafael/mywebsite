import React, {Component} from 'react';
import './AboutStyle.css';
import js_logo from '../images/js_logo.png';
import html_logo from '../images/html_logo.png';
import css_logo from '../images/css_logo.png';
import react_logo from '../images/react_logo.svg';
import node_logo from '../images/node_logo.jpg';
import py_logo from '../images/python_logo.jpg';

var heightSize = null, widthSize = null;

class Image extends Component{
  constructor(props){
    super(props);
    this.rate = {
      'one': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
              </div>),
      'two': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
              </div>),
      'three': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
              </div>),
      'four': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
              </div>),
      'four-and-a-hald':(<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                            <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                            <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                            <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                            <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                            <i className="fas fa-star" style={{fontSize:20, color: "rgba(0,0,0,0.5)"}}></i>
                         </div>),
      'five': (<div className="ratingDiv" id={this.props.imgId + "Rate"}>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
                <i className="fas fa-star" style={{fontSize:20, color: "rgb(255, 215, 7)"}}></i>
              </div>),
    }
    this.Var = {
      'self': document.getElementById(this.props.imgId),
      'thisRateDiv': document.getElementById(this.props.imgId + "Rate"),
    }
  }
  getRateHeight(){
    var height = null;
    document.getElementById(this.props.imgId + "Rate").display = "flex";
    height = document.getElementById(this.props.imgId + "Rate").clientHeight;
    document.getElementById(this.props.imgId + "Rate").display = "none";
    return height;
  }

  componentDidMount(){
    //this.props.rateId = this.props.imgId;
    document.getElementById(this.props.imgId).onmouseover = ()=>{
      try{
        document.getElementById(this.props.imgId + "Rate").className += " imgActived";
          document.getElementById(this.props.imgId).style.height =  String(heightSize - this.getRateHeight()  ) + "px";
          document.getElementById(this.props.imgId).style.width =  String(widthSize - this.getRateHeight()  ) + "px";
      }
      catch(e){
        console.log("Error whith mouseouver", e);
        //do nothing
      }
    }
    document.getElementById(this.props.imgId).onmouseout = ()=>{
      try{
        document.getElementById(this.props.imgId + "Rate").className = document.getElementById(this.props.imgId + "Rate").classList[0];
        document.getElementById(this.props.imgId).style.height =  heightSize + "px";
        document.getElementById(this.props.imgId).style.width =  widthSize + "px";
      }
      catch(e){
        console.log("Error whith mouseout", e);
        //do nothing
      }
    }
    heightSize = document.getElementById(this.props.imgId).clientHeight;
    widthSize = document.getElementById(this.props.imgId).clientWidth;
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
  }
  componentWillUnmount(){
    clearInterval(this.clockOne);
  }
  render(){
    return(
      <div className="AboutDiv" id="About">
          <div className="softwareAbout">
            <p className="aboutParagraph" >Software Skills</p>
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
          </div>
      </div>

    );
  }
}

export {About};
