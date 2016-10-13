var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');


var Navbar = React.createClass({
  getInitialState: function(){
    this.toWhere = "/Search";
    return({loggedIn: UserStore.loggedIn(), username: null, password: null, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },

  signOutClick: function(event){

    APIUtil.logoutUser();

      ApiActions.emptyShelves();
      ApiActions.deleteCurrentBook();


    this.history.push({pathname: "/Search"});
  },
  signClick: function(event){
    event.preventDefault();
    this.clicked = true;

    if(this.state.password !== null && this.state.password.length >= 6){
      APIUtil.signIn(this.state.username, this.state.password);
    }
    else{
      this.state.password = "";
      this.setState({message: "invalid password, must be at least 6 digits please try again"});
    }

  },
  _onChange: function(){


    if(UserStore.loggedIn()){
      this.closeModal();
      this.setState({loggedIn: UserStore.loggedIn()});
      this.history.push({pathname: this.toWhere});

    }else{
      if(this.clicked){
        this.setState({message:"unsuccessful, please try again", loggedIn: UserStore.loggedIn()});
      }else {
        if(UserStore.needsToLogin()){
          this.openModal();
          this.setState({loggedIn: UserStore.loggedIn(), message: "login to continue"});
        }

      }
    }

  },
  signUpClick: function(event){
    event.preventDefault();

    this.clicked = true;
    if(this.state.username !== "" && this.state.password !== ""){
      APIUtil.createUser(this.state.username, this.state.password)
    }
    else {
      this.setState({message: "invalid password please try again"});
    }
    debugger;

  },

  render: function() {
    var signB;
    var un;
    var cb;




    return (
      <div className="Navbar">
        <nav className="header-nav group" >

           <div className="header-logo" >
             <img className="logo-corner" src="http://res.cloudinary.com/litlitves/image/upload/v1461114377/books-icon_f26trs.png" />

           </div>

           <ul className="header-list group">

             <li className="nav-right" id="NavSearch" >Search</li>
             <li className="nav-right" id="NavDesk" >Desk</li>
           </ul>

         </nav>

      </div>
    );
  }

});

module.exports = Navbar;
