import React, {Component} from 'react';
import './style.css';
export {Home, NavBar, About};

var Wait = function(miliseconds){
  var d = new Date();
  do{}while(new Date() - d <= miliseconds);
};

class Home extends Component{
  constructor(props){
    super(props);
    this.obj={
      words: [" WebSites", " Web Applications", " Front-end Development", " Backend Development", ],
      index: 0,
      index2: 0,
      text: "",

    };
    this.state={text: "", dot: ""};
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
      50
    );
  }
  componentWillUnmount() {
    clearInterval(this.outDoor);
    clearInterval(this.funcOne);
    clearInterval(this.funcTwo);
  }
  check(){
    if(this.obj.index2 >= this.obj.words[this.obj.index].length){
      this.obj.index2 = 0;
      this.obj.index++;
      this.obj.text =String(" ");
      this.setState({dot:" "});
      this.setState({text:this.obj.text});
    }
    if(this.obj.index >= this.obj.words.length){
      this.obj.index = 0;
    }
  }
  outDoor(){
    if(this.obj.index2 == this.obj.words[this.obj.index].length){
      this.setState({dot: "."});
    }
    else if(this.obj.index2 > this.obj.words[this.obj.index].length){
      //do nothing
      document.getElementById("dot").style.borderWidth = "10px";
    }
    else{
      this.obj.text += this.obj.words[this.obj.index][this.obj.index2++];
      this.setState({text:this.obj.text});
    }
  }


  render(){
    return(
      <div className="container" id="Home">
        <div className="outDoor">
          <p id="Home">{`Hi, i'm `}<i id="Home">Rafael Santos</i>. {`I'm a software developer.`}</p>
          <div id="rowHome">
            <p>{`I work with:`}</p>
            <p id="space"> </p>
            <p id="works">{this.state.text}</p>
            <p id="dot">{this.state.dot}</p>
          </div>
         </div>
      </div>
    );
  }
}
class NavBar extends Component{
  render(){
    return(
      <div className="navigationBar">
        <p id="navBar"><a id="navBar" href="">Home</a></p>
        <p id="navBar"><a id="navBar" href="">About</a></p>
        <p id="navBar"><a id="navBar" href="">Portfolio</a></p>
        <p id="navBar"><a id="navBar" href="">Contact</a></p>
      </div>
    )
  }
}
class About extends Component{
  render(){
    return(
      <div className="container" id="About">
      </div>
    )
  }
}
