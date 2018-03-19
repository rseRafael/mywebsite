import React, {Component} from 'react';
import './NavBarStyle.css';


var navObj= Object();

var intervalHolder = null;

/*var checkingTheWidth = null;*/

var goTo = function(place, time = 300, clock = 25){
  var change = null;
  if(place > document.documentElement.scrollTop){
    change = (place - document.documentElement.scrollTop) / (time/clock);
    if(intervalHolder === null){
      intervalHolder = setInterval(
        ()=>{
          if(document.documentElement.scrollTop < place){
            document.documentElement.scrollTop += change;
            console.log("changed scrolltop");
            if(document.documentElement.scrollTop > place){
              document.documentElement.scrollTop = place;
              console.log("making it equal");
            }
          }
          else if(document.documentElement.scrollTop === place){
            clearInterval(intervalHolder);
            console.log("done whith scrollTop");
            intervalHolder = null;
          }
        },
        clock
      );
    }
  }
  else if(place < document.documentElement.scrollTop){
      change = (document.documentElement.scrollTop - place) / (time/clock);
      if(intervalHolder === null){
        intervalHolder = setInterval(
          ()=>{
            if(document.documentElement.scrollTop > place){
              document.documentElement.scrollTop -= change;
              if(document.documentElement.scrollTop < place){
                document.documentElement.scrollTop = place;
              }
            }
            else if(document.documentElement.scrollTop === place){
              clearInterval(intervalHolder);
              intervalHolder = null;
            }
          },
          clock
        );
    }
  }
};


var getNavBarHeight = function (){
  if(document.getElementById('navBar').clientHeight === 0){
    return navObj.thisHeight;
  }
  else{
    return document.getElementById('navBar').clientHeight;
  }
};

class NavBar extends Component{
  constructor(props){
    super(props);
    this.homeLink = null;
    /*this.isSmall = false;
    this.state = {
      navBar:
      (
        <div className="navBarDiv" id="navBar">
          <a className="linkText" id="homeLink">Home</a>
          <a className="linkText" id="aboutLink">About</a>
          <a className="linkText" id="portfolioLink">Portfolio</a>
          <a className="linkText" id="contactLink">Contact</a>
        </div>
      ),

    };*/
  }

  checkHeight(){
    document.getElementById('navBar').className += " activatedBar";
    navObj.thisHeight = document.getElementById('navBar').clientHeight;
    document.getElementById('navBar').className = document.getElementById('navBar').classList[0];
    console.log(navObj.thisHeight);
  }

  settingLinks(){
    navObj.links[0].onclick = ()=>{
      goTo(0);
    };
    navObj.links[1].onclick = ()=>{
      goTo(navObj.divHeight[0] - getNavBarHeight());
    };
    navObj.links[2].onclick = ()=>{
      goTo(navObj.divHeight[0] + navObj.divHeight[1] - getNavBarHeight());
    };
    navObj.links[3].onclick = ()=>{
      goTo(navObj.divHeight[0] + navObj.divHeight[1] + navObj.divHeight[3] + navObj.divHeight[4]);
    };
  }



  componentDidMount(){
    /*checkingTheWidth = setInterval(
      ()=>{
        if(document.body.clientWidth <= 500 && !this.isSmall){
          this.setState(
            {bars: (<SmallNavBarDiv />)}
          );
          this.isSmall = true;
        }
        else if(document.body.clientWidth > 500 && this.isSmall){
          this.setState(
            {bars: (<SmallNavBarDiv />)}
          );
          this.isSmall = false;
        }
      }
      ,300
    );*/

    navObj={
        self: document.getElementById('navBar'),
        divs:[
          document.getElementById("Home"),
          document.getElementById("About"),
          document.getElementById("Portfolio"),
          document.getElementById("Contact"),
          document.getElementById('ContactIcons'),
        ],
        divHeight:[
          document.getElementById("Home").clientHeight,
          document.getElementById("About").clientHeight,
          document.getElementById("Portfolio").clientHeight,
          document.getElementById("Contact").clientHeight,
          document.getElementById('ContactIcons').clientHeight,
        ],

        links:[
          document.getElementById("homeLink"),
          document.getElementById("aboutLink"),
          document.getElementById("portfolioLink"),
          document.getElementById("contactLink"),
        ],

        deactivateLinks:function(){
          for(var i = 0; i < navObj.links.length; i++){
            navObj.links[i].className = navObj.links[i].classList[0];
          }
        },

        activateLink: function(element){
          element.className += " activatedLink";
        },

        lastScroll: null,

        currentScroll: null,

        thisHeight: 0,

        isComingDown: function(){
          if(navObj.lastScroll !== null && navObj.currentScroll !== null){
            if(navObj.lastScroll < navObj.currentScroll){
              return true;
            }
            else{
              return false;
            }
          }
          else{
            return false;
          }
        },

        deactivateDivs:function(){
          for(var div of navObj.divs){
            div.className  = div.classList[0];
          }
        },

        activateDiv:function(div){
          div.className += ' activateDivAnimation';
        },
    }

    this.checkHeight();

    window.onscroll = ()=>{

      /*One Part of the Code*/
      if(document.documentElement.scrollTop < navObj.divHeight[0] / 2 && navObj.self.className.search('unactive') === -1){
        navObj.self.className = navObj.self.classList[0];
        navObj.self.className += ' deactivatedBar unactive'; /*unactive is just a label. It doesnt exist.*/
        this.homeLink = setInterval(
          ()=>{
            if(document.getElementById('navBar').className.search('deactivatedBar') !== -1){
              navObj.self.className = navObj.self.classList[0];
              navObj.self.className += ' unactive';
              clearInterval(this.homeLink);
            }
          },
          500
        );
      }
      if(document.documentElement.scrollTop >= navObj.divHeight[0] / 2 && navObj.self.className.search('unactive') !== -1){
          navObj.self.className = navObj.self.classList[0];
          navObj.self.className += ' activatedBar';
      }
      if(document.documentElement.scrollTop >= navObj.divHeight[0] - getNavBarHeight() && navObj.self.className.search('fixedBar') === -1){
        navObj.self.className += ' fixedBar';
      }
      if(document.documentElement.scrollTop < navObj.divHeight[0] - getNavBarHeight() && navObj.self.className.search('fixedBar') !== -1){
        navObj.self.className = navObj.self.classList[0];
        navObj.self.className += ' activatedBar';
      }
      /*------------------*/
      /*Another Part of the Code*/
      navObj.deactivateLinks();
      if( 0 <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divHeight[0] - getNavBarHeight()){
        navObj.activateLink(document.getElementById('homeLink'));
      }
      else if( navObj.divHeight[0] - getNavBarHeight() <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divHeight[0] + navObj.divHeight[1] - navObj.self.clientHeight){
        navObj.activateLink(document.getElementById('aboutLink'));
      }
      else if( navObj.divHeight[0] + navObj.divHeight[1] - navObj.self.clientHeight <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divHeight[0] + navObj.divHeight[1] + navObj.divHeight[2] - navObj.self.clientHeight){
        navObj.activateLink(document.getElementById('portfolioLink'));
      }
      else if( navObj.divHeight[0] + navObj.divHeight[1] + navObj.divHeight[2] - navObj.self.clientHeight <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divHeight[0] + navObj.divHeight[1] + navObj.divHeight[2] + navObj.divHeight[3]){
        navObj.activateLink(document.getElementById('contactLink'));
      }
      /*------------------*/

      /*Other Part of the Code*/
      navObj.deactivateDivs();
      if(navObj.divHeight[0]+  navObj.divHeight[1] +navObj.divHeight[2] <= document.documentElement.scrollTop){
        navObj.activateDiv(navObj.divs[3]);
      }

    }

    this.settingLinks();

    if(document.documentElement.scrollTop >= navObj.divHeight[0] - getNavBarHeight() && navObj.self.className.search('activatedBar') === -1){
      navObj.self.className = navObj.self.classList[0];
      navObj.self.className += ' activatedBar';
      if(navObj.self.className.search('fixedBar') === -1){
        navObj.self.className += ' fixedBar';
      }
    }
  }

  render(){
    return(
      <div className="navBarDiv" id="navBar">
        <a className="linkText" id="homeLink">Home</a>
        <a className="linkText" id="aboutLink">About</a>
        <a className="linkText" id="portfolioLink">Portfolio</a>
        <a className="linkText" id="contactLink">Contact</a>
      </div>
    );
  }
}

export{NavBar, navObj, getNavBarHeight, goTo};
