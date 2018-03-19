import React, {Component} from 'react';
import './ContactStyle.css';

class InputBox extends Component{
  constructor(props){
    super(props);
    this.state = {text:this.props.value,};
  }
  componentDidMount(){
    console.log(this.props);
    console.log(this.props.type, this.props.name, this.props.id);
  }

  render(){
    return(
      <div className="inputDiv">
          <p className="inputParagraph" id={this.props.id}>{this.props.value}</p>
          <input className="inputBox" type="text" id={this.props.id}/>
      </div>
    );
  }

}

class Contact extends Component{
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
        </div>

        <div className="iconsDiv" id="ContactIcons">
          <div className="iconsContainer">
            <i className="fab fa-github" style={{fontSize: "40px"}}></i>
            <i className="fas fa-envelope-square" style={{fontSize: "40px"}}></i>
            <i className="fab fa-linkedin" style={{fontSize: "40px"}}></i>
            <i className="fab fa-whatsapp" style={{fontSize: "40px"}}></i>
          </div>
        </div>

      </div>
    );
  }
}
export { Contact };
