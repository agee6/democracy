var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var helloUtil = require('..//helloUtil');


var Navbar = React.createClass({
  getInitialState: function(){
    return({});
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
  goHome: function(){
    this.props.nextClick("Welcome")
  },
  facebookLogin: function(){
    helloUtil.loginToFacebook();
  },
  facebookLogout: function(){
    helloUtil.facebook('logout');
  },
  getMyFacebook: function(){
    helloUtil.facebook('myFriends');
  },

  render: function() {

    return (
      <div className="masthead clearfix">
        <div className="nav-container container-fluid">
          <h3 className="masthead-brand">Strategic Voting</h3>
          <nav>
            <ul className="nav masthead-nav">
              <li className="active" onClick={this.goHome}><a href="#">Home</a></li>
              <li><button className="btn btn-primary" onClick={this.facebookLogin}>Facebook</button></li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }

});

module.exports = Navbar;
