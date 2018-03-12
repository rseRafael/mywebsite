import React, {Component} from 'react';
import './HomeStyle.css';


export class Home extends Component{
  constructor(props){
    super(props);
    this.Variables={
      words: ["WebSites", "Web Applications", "Front-end Development", "Backend Development", ],
      index: 0,
      index2: 0,
      text: "",
    };
    this.state={text: "", dot: "", width: document.documentElement.offsetWidth + 15};
  }
  componentDidMount() {
    this.funcOne = setInterval(
      ()=>{
        this.check();
      },
      2000
    );
    this.funcTwo = setInterval(
      ()=>{
        this.outDoor();
      },
      35
    );

    this.funcThree = setInterval(
      ()=>{
        this.setState(
          {width: document.documentElement.offsetWidth + 15}
        );
      },
      50
    );
  }
  componentWillUnmount() {
    clearInterval(this.outDoor);
    clearInterval(this.funcOne);
    clearInterval(this.funcTwo);
    clearInterval(this.funcThree);
  }
  check(){
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
  outDoor(){
    if(this.Variables.index2 === this.Variables.words[this.Variables.index].length){
      this.setState({dot: "."});
    }
    else if(this.Variables.index2 > this.Variables.words[this.Variables.index].length){
      //do nothing

    }
    else if(this.Variables.index2 <= this.Variables.words[this.Variables.index].length){
      this.Variables.text += this.Variables.words[this.Variables.index][this.Variables.index2++];
      this.setState({text:this.Variables.text});
    }
  }


  render(){
    return(
      <div className="container homeDiv" id="Home">
          <div className="outDoor">
              <p className="homeParagraph">{`Hello, I'm `}<span id="Home">{'Rafael Santos'}</span>. {`I'm a software developer.`}</p>
              <div className="homeRow">
                  <p className="homeParagraph">{"I work with "} <span id="Home">{this.state.text}</span>{this.state.dot}</p>
              </div>
           </div>
      </div>
    );
  }
}
