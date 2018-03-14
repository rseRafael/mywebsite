import React, {Component} from 'react';
import './HomeStyle.css';

var clickableMovement = null;

export class Home extends Component{
  constructor(props){
    super(props);
    this.Variables={
      words: ["WebSites", "Web Applications", "Front-end Development", "Backend Development", ],
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
      clickableMovement = setInterval(
        () => {
          if(document.documentElement.scrollTop < document.getElementById('Home').clientHeight){
              document.documentElement.scrollTop +=  document.getElementById('Home').clientHeight/10;
              if(document.documentElement.scrollTop > document.getElementById('Home').clientHeight){
                document.documentElement.scrollTop = document.getElementById('Home').clientHeight;
              }
          }
          else{
            clearInterval(clickableMovement);
          }
        },
        25
      );
    }
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


  render(){
    return(
      <div className="homeDiv" id="Home">
        <div className="homeContent">
          <div className="homeTextDiv">
              <p className="homeParagraph">{`Hello, I'm `}<span id="Home">{'Rafael Santos'}</span>. {`I'm a software developer.`}</p>
              <p className="homeParagraph unactiveBorder" id='variableText'>{"I work with "} <span id="Home">{this.state.text}</span>{this.state.dot}</p>
          </div>
          <div className="clickableDiv" id="clickDiv"></div>
        </div>
      </div>
    );
  }
}
