import React, {Component} from 'react';
import './ContactStyle.css';

var boxDivs= null;
var deg = 10;
var rotateInterval = null;
var gotData = false;
var d = new Date();
var anyBoxEmpty;
var gettingData = function (){
  anyBoxEmpty = false;
  for(var box of boxDivs){
    if(box.value === "" || box.value === undefined ){
      anyBoxEmpty = true;
      box.style.borderColor = "rgb(200, 0, 0)";
    }
  }
  if(!anyBoxEmpty){
      for(box of boxDivs){
        box.value = "";
      }
  }
  gotData = true;
}

class InputBox extends Component{
  constructor(props){
    super(props);
    this.state = {text:this.props.value,}
  };
  componentDidMount(){
    document.getElementById(this.props.id + "Box").onclick = ()=>{
      document.getElementById(this.props.id + "Box").style.borderColor = "white";
    }
  }

  render(){
    return(
      <div className="inputDiv">
          <p className="inputParagraph" id={this.props.id}>{this.props.value}</p>
          <input className="inputBox" type="text" id={this.props.id + "Box"}/>
      </div>
    );
  }

}

class Contact extends Component{

  componentDidMount(){

    boxDivs= [
      document.getElementById('nameInputBox'),
      document.getElementById('emailInputBox'),
      document.getElementById('phoneInputBox'),
      document.getElementById('websiteInputBox'),
    ];
    document.getElementById('rotateDiv').onclick= ()=>{
      console.log(`submit has been clicked`);
      gotData = false;
      d = new Date();
      rotateInterval= setInterval(
        ()=>{
            document.getElementById('rotateText').style.display = "none";
            document.getElementById('loading').style.display = "inline-block";
            document.getElementById('loading').style.transform = `rotate(${deg}deg)`;
            deg += 10;
            if(deg > 360){
              deg = 10;
            }
            if(gotData && (new Date() - d >= 1000) ){
              document.getElementById('loading').style.transform = `rotate(${360}deg)`;
              document.getElementById('loading').style.display = "none";
              document.getElementById('rotateText').style.display = "block";
              clearInterval(rotateInterval);
              console.log("gotDate ");
            }
        },
        10
      );
      gettingData();

    }

  }

  render(){
    return(
      <div>
        <div className="ContactDiv" id="Contact">
            <p className="contactParagraph">Contact Me</p>
            <div className="formOrganizer">
                <InputBox value="Name: " id="nameInput" name="moveOne"/>
                <InputBox value="E-mail Adress: " id="emailInput" name="_moveTwo"/>
            </div>
            <div className="formOrganizer">
                <InputBox value="Phone number: " id="phoneInput" name="moveOne"/>
                <InputBox value="Website: " id="websiteInput" name="moveTwo"/>
            </div>
              <div className="ContactClickButton" id="rotateDiv">
                  <i className="fas fa-spinner" id="loading"></i>
                  <p id="rotateText">Submit</p>
              </div>
        </div>



        <div className="iconsDiv" id="ContactIcons">
          <div className="iconsContainer">
            <i className="fab fa-github active" style={{fontSize: "40px"}}></i>
            <i className="fas fa-envelope-square active" style={{fontSize: "40px"}}></i>
            <i className="fab fa-linkedin active" style={{fontSize: "40px"}}></i>
            <i className="fab fa-whatsapp active" style={{fontSize: "40px"}}></i>
          </div>
        </div>



      </div>
    );
  }
}
export { Contact };
