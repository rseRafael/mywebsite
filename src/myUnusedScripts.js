/*This is just an example*/
class MyBar extends Component{
  componentDidMount(){
    this.change = function(){
      var bar = document.getElementById("MyBar");
      var b = document.body;
      var d = document.documentElement;
      window.onscroll = () =>{
        bar.style.width = String(d.scrollTop/(b.clientHeight - d.clientHeight)*100) + "vw";
      };
      console.log("we did it.");
    }
    this.change();
  }
  componentWillUnmount(){
  }
  render(){
    return(
      <div className="containerTwo">
        <div id="MyBar" className="testBar">
        </div>
      </div>
    );
  }
}
/*That will be deleted soon */


/*Sera deletado ja ja*/
div.containerTwo{
  height: 2vh;
  width: 100vw;

  background-color: rgb(255, 255, 255);
  padding: 0px;
  margin:0px;

  position: sticky;
  top: 0px;

}
div.testBar{
  background-color: rgb(10, 255, 10);
  height: 100%;
  width: 0%;

  margin: 0px;
  padding: 0px;
}
/*--------------------*/
