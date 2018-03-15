import React, {Component} from 'react';
import './NavBarStyle.css';


var navObj= Object();

var intervalHolder = null;

var goTo = function(place, time = 300, clock = 25){
  var change = null;
  if(place > document.documentElement.scrollTop){
    change = (place - document.documentElement.scrollTop) / (time/clock);
    if(intervalHolder === null){
      intervalHolder = setInterval(
        ()=>{
          if(document.documentElement.scrollTop < place){
            document.documentElement.scrollTop += change;
            if(document.documentElement.scrollTop > place){
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
      goTo(navObj.divs[0] - getNavBarHeight());
    };
    navObj.links[2].onclick = ()=>{
      goTo(navObj.divs[0] + navObj.divs[1] - getNavBarHeight());
    };
    navObj.links[3].onclick = ()=>{
      goTo(navObj.divs[0] + navObj.divs[1] + navObj.divs[3] - getNavBarHeight());
    };
  }
  componentDidMount(){

    navObj={
        self: document.getElementById('navBar'),

        divs:[
          document.getElementById("Home").clientHeight,
          document.getElementById("About").clientHeight,
          document.getElementById("Portfolio").clientHeight,
          document.getElementById("Contact").clientHeight,
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
    }

    this.checkHeight();

    window.onscroll = ()=>{
      if(document.documentElement.scrollTop < navObj.divs[0] / 2 && navObj.self.className.search('unactive') === -1){
        navObj.self.className = navObj.self.classList[0];
        navObj.self.className += ' deactivatedBar unactive';
        this.homeLink = setInterval(
          ()=>{
            if(document.getElementById('navBar').className.search('deactivatedBar') !== -1){
              navObj.self.className = navObj.self.classList[0];
              navObj.self.className += ' unactive';
              console.log('done');
              clearInterval(this.homeLink);
            }
          },
          500
        );
      }
      if(document.documentElement.scrollTop >= navObj.divs[0] / 2 && navObj.self.className.search('unactive') !== -1){
          navObj.self.className = navObj.self.classList[0];
          navObj.self.className += ' activatedBar';
      }
      if(document.documentElement.scrollTop >= navObj.divs[0] - getNavBarHeight() && navObj.self.className.search('fixedBar') === -1){
        navObj.self.className += ' fixedBar';
      }
      if(document.documentElement.scrollTop < navObj.divs[0] - getNavBarHeight() && navObj.self.className.search('fixedBar') !== -1){
        navObj.self.className = navObj.self.classList[0];
      }
      navObj.deactivateLinks();
      if( 0 <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divs[0] - getNavBarHeight()){
        navObj.activateLink(document.getElementById('homeLink'));
      }
      else if( navObj.divs[0] - getNavBarHeight() <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divs[0] + navObj.divs[1] - navObj.self.clientHeight){
        navObj.activateLink(document.getElementById('aboutLink'));
      }
      else if( navObj.divs[0] + navObj.divs[1] - navObj.self.clientHeight <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divs[0] + navObj.divs[1] + navObj.divs[2] - navObj.self.clientHeight){
        navObj.activateLink(document.getElementById('portfolioLink'));
      }
      else if( navObj.divs[0] + navObj.divs[1] + navObj.divs[2] - navObj.self.clientHeight <= document.documentElement.scrollTop && document.documentElement.scrollTop < navObj.divs[0] + navObj.divs[1] + navObj.divs[2] + navObj.divs[3]){
        navObj.activateLink(document.getElementById('contactLink'));
      }
    }
    this.settingLinks();

    if(document.documentElement.scrollTop >= navObj.divs[0] - getNavBarHeight() && navObj.self.className.search('activatedBar') === -1){
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
