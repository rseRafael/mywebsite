import React, {Component} from 'react';
import './PortfolioStyle.css';
class Portfolio extends Component{
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
