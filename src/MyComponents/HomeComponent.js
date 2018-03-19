import React, {Component} from 'react';
import './HomeStyle.css';
import {NavBar,goTo, navObj, getNavBarHeight} from './NavigationBarComponent.js';


export class Home extends Component{
  constructor(props){
    super(props);
    this.Variables={
      words: ["WebSites", "Web Applications", "Front-end Development", "Back-end Development", "Responsive WebSites", "UI" ],
      index: 0,
      index2: 0,
      text: "",
      timer: null,
      miliseconds: 200,
    };
    this.state={text: "", dot: "", width: document.documentElement.offsetWidth + 15};
  }
  componentDidMount() {
    this.funcOne = setInterval(
      ()=>{
        this.checking();
      },
      2500
    );
    this.funcTwo = setInterval(
      ()=>{
        this.settingText();
      },
      40
    );

    this.funcThree = setInterval(
      ()=>{
        this.setState(
          {width: document.documentElement.offsetWidth + 15}
        );
      },
      50
    );
    document.getElementById('clickDiv').onclick = ()=>{
      console.log(getNavBarHeight());
      goTo(navObj.divHeight[0] - getNavBarHeight(), 600);
    }
    this.locateMainContent();
    document.getElementById('clickDiv').onmouseover = ()=>{
      var divs = [
        document.getElementById('clickDiv'),
        document.getElementById('roundDivOne'),
        document.getElementById('roundDivTwo'),
        document.getElementById('myParagraphDiv'),
      ];
      console.log("mouseOuver");
      for(var i of divs){
        if(i.className.search('activeClickableDiv') === -1){
          i.className += " activeClickableDiv";
        }
        i.style.backgroundColor = "rgb(227, 27, 109)";
        i.style.color = "white";
        i.style.animationName = "none";
        console.log("Ouver", i.style.backgroundColor);
      }
    };

    document.getElementById('clickDiv').onmouseout = ()=>{
      var divs = [
        document.getElementById('clickDiv'),
        document.getElementById('roundDivOne'),
        document.getElementById('roundDivTwo'),
        document.getElementById('myParagraphDiv'),
      ];
      console.log("mouseOut");
      for(var i of divs){
        if(i.className.search('activeClickableDiv') !== -1){
          i.className = i.classList[0];
        }
        i.style.backgroundColor = "";
        i.style.color = "";
        i.style.animationName = "";
        console.log("Out", i.style.backgroundColor);
      }
    };

  }
  componentWillUnmount() {
    clearInterval(this.outDoor);
    clearInterval(this.funcOne);
    clearInterval(this.funcTwo);
    clearInterval(this.funcThree);
  }
  checking(){
    if(this.Variables.index2 >= this.Variables.words[this.Variables.index].length){
      this.Variables.index2 = 0;
      this.Variables.index++;
      this.Variables.text = String(" ");
      this.setState({dot: ""});
      this.setState({text:this.Variables.text});
    }
    if(this.Variables.index >= this.Variables.words.length){
      this.Variables.index = 0;
    }
  }
  settingText(){
    if(this.Variables.index2 === this.Variables.words[this.Variables.index].length){
      this.setState({dot: "."});
      this.Variables.index2++;
      this.Variables.timer = new Date();
    }
    else if(this.Variables.index2 > this.Variables.words[this.Variables.index].length){

      if(document.getElementById('variableText').classList[1] === "activeBorder"){

        if(new Date() - this.Variables.timer >= this.Variables.miliseconds){
          document.getElementById('variableText').className = "homeParagraph unactiveBorder";
          this.Variables.timer = new Date();
        }
      }
      else if(document.getElementById('variableText').classList[1] === "unactiveBorder"){

        if(new Date() - this.Variables.timer >= this.Variables.miliseconds){
          document.getElementById('variableText').className = "homeParagraph activeBorder";
          this.Variables.timer = new Date();
        }
      }
    }
    else if(this.Variables.index2 <= this.Variables.words[this.Variables.index].length){
      this.Variables.text += this.Variables.words[this.Variables.index][this.Variables.index2++];
      this.setState({text:this.Variables.text});
    }
  }
  locateMainContent(){
    document.getElementById('homeMainContent').className += " locateContent";
    document.getElementById('homeMainContent').style.top = navObj.divHeight[0]/3;
    console.log('done');
  }

  render(){
    return(
      <div className="homeDiv" id="Home">
        <div className="homeContent" id="homeMainContent">
          <div className="homeTextDiv" >
              <p className="homeParagraph">{`Hello, I'm `}<span id="Home">{'Rafael Santos'}</span>. {`I'm a software developer.`}</p>
              <p className="homeParagraph unactiveBorder" id='variableText'>{"I work with "} <span id="Home">{this.state.text}</span>{this.state.dot}</p>
          </div>
          <div className="clickableDiv" id="clickDiv">
            <div className="roundDiv" id="roundDivOne"></div>
            <p className="roundDivParagraph" id="myParagraphDiv">{`Click to know more about me`}</p>
            <div className="roundDiv" id="roundDivTwo"></div>
          </div>
        </div>
        <NavBar/>
      </div>
    );
  }
}
