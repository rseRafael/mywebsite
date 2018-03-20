import React, {Component} from 'react';
import './PortfolioStyle.css';
import {navObj} from './NavigationBarComponent.js';
class Portfolio extends Component{
  componentDidMount(){
    console.log("clientHeight", document.getElementById('Portfolio').clientHeight,"Height", document.getElementById('Portfolio').style.height);
    console.log(navObj.self.clientHeight);
    document.getElementById('Portfolio').style.height = document.getElementById('Portfolio').clientHeight - navObj.self.clientHeight;
    console.log("clientHeight", document.getElementById('Portfolio').clientHeight,"Height", document.getElementById('Portfolio').style.height);
  }
  render(){
    return(
      <div className="portfolioDiv" id="Portfolio">
        <p className="portfolioParagraph">My Projects</p>

        <div className="projectShower">
          <div className="projectWindow"><i class="fas fa-eye-slash" id="eyeIcon"></i></div>
          <div className="projectWindow"><i class="fas fa-eye-slash" id="eyeIcon"></i></div>
          <div className="projectWindow"><i class="fas fa-eye-slash" id="eyeIcon"></i></div>
        </div>
        <div className="projectShower">
          <div className="projectWindow"><i class="fas fa-eye-slash" id="eyeIcon"></i></div>
          <div className="projectWindow"><i class="fas fa-eye-slash"  id="eyeIcon"></i></div>
          <div className="projectWindow"><i class="fas fa-eye-slash" id="eyeIcon"></i></div>
        </div>
        <div className="projectShower">
          <div className="projectWindow"><i class="fas fa-eye-slash" id="eyeIcon"></i></div>
          <div className="projectWindow"><i class="fas fa-eye-slash"  id="eyeIcon"></i></div>
          <div className="projectWindow"><i class="fas fa-eye-slash" id="eyeIcon"></i></div>
        </div>
      </div>
    );
  }
}

export {Portfolio};
