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
          <p className="inputParagraph">{this.props.value}</p>
          <input className="inputBox" type="text" id={this.props.id}/>
      </div>
    );
  }

}

class Contact extends Component{
  render(){
    return(
      <div className="ContactDiv" id="Contact">
              <p className="contactParagraph">Contact Me</p>
              <div className="formOrganizer">
                  <InputBox value="Name: " id="nameInput"/>
                  <InputBox value="E-mail Adress: " id="emailInput"/>
              </div>
              <div className="formOrganizer">
                  <InputBox value="phone number: " id="nameInput"/>
                  <InputBox value="Website: " id="emailInput"/>
              </div>
      </div>
    );
  }
}
export { Contact };
