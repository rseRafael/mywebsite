import React, {Component} from 'react';

import './BodyStyle.css';

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

class Contact extends Component{
  render(){
    return(
      <div className="FormDiv" id="Contact">
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
export {Contact};
