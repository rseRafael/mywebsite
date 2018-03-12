import React, {Component} from 'react';
import './AboutStyle.css';

import js_logo from '../images/js_logo.png';
import html_logo from '../images/html_logo.png';
import css_logo from '../images/css_logo.png';
import react_logo from '../images/react_logo.svg';
import node_logo from '../images/node_logo.jpg';
import py_logo from '../images/python_logo.jpg';

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
  componentDidMount(){
    //this.props.rateId = this.props.imgId;
    document.getElementById(this.props.imgId).onmouseover = () =>{
      try{
        document.getElementById(this.props.imgId + "Rate").className += " imgactive";
      }
      catch(e){
        console.log("erro um", e);
        //do nothing
      }
    }
    document.getElementById(this.props.imgId).onmouseout = () =>{
      try{
        document.getElementById(this.props.imgId + "Rate").className = document.getElementById(this.props.imgId + "Rate").classList[0];
      }
      catch(e){
        console.log("erro dois", e);
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
export class About extends Component{
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
        <p className="aboutParagraph" >Software Skills</p>
        <p className="aboutParagraph" id="different">{this.state.width}</p>
        <div className="imageRow">
          <Image imgSrc={js_logo} imgAlt={"Javascript"} imgId={"jsLogo"} rate={"four"}/>
          <Image imgSrc={html_logo} imgAlt={"HTML"} imgId={"htmlLogo"} rate={"four"}/>
          <Image imgSrc={css_logo} imgAlt={"CSS"} imgId={"cssLogo"} rate={"four"}/>
        </div>

        {/*
        <div className="imgDiv" id="imgDiv">
            <img src={js_logo}  className="imgFormat" id="imgFormat" name alt="javascript"/>
            <div className="ratingDiv" id="javascriptRating">
                <i className="fas fa-star" style={{fontSize:40, color: "rgb(255, 215, 7)"}}></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <img src={html_logo}  className="imgFormat" id="imgFormat" alt="html"/>
            <img src={css_logo}  className="imgFormat"  id="imgFormat" alt="css"/>

        </div>
        <div className="imgDiv" id="imgDiv">
          <img src={react_logo}  className="imgFormat" alt="react"/>
          <img src={node_logo}  className="imgFormat" alt="node"/>
          <img src={py_logo} className="imgFormat" alt="python"/>
        </div>
        <i className="fa fa-cloud"></i>
        <i class="far fa-address-book"></i>*/}
      </div>

    );
  }
}
