var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var helloUtil = require('../helloUtil');


var Navbar = React.createClass({
  getInitialState: function(){
    return({loggedIn: false, onGraph: false});
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

     this.props.nextClick('GraphArea');

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
  toGraph: function(){
    APIUtil.getTrumpFacebook();
    this.props.nextClick("GraphArea");
    this.setState({onGraph: true});

  },
  goHome: function(){
    this.props.nextClick("Welcome");
    this.setState({onGraph:false});
  },
  facebookLogin: function(){
    if(this.state.loggedIn){
      this.nextClick("GraphArea");
    }else{
      helloUtil.loginToFacebook();
    }
  },

  render: function() {
    var element, header;
    if(this.state.onGraph){
      element = <button className="btn btn-primary" onClick={this.goHome}><a href="#">Home</a></button>
      header = <h3 className="masthead-brand" onClick={this.goHome}>Strategic Voting</h3>
    }else{
      element = <button className="btn btn-primary" onClick={this.toGraph}><a href="#">Social Media Election</a></button>
      header = <h3 className="masthead-brand">Strategic Voting</h3>
    }

    return (
      <div className="masthead clearfix">
        <div className="nav-container container-fluid">
          {header}
          <nav>
            <ul className="nav masthead-nav">
              {element}
              <li><div className="facebook-area">
                    <div
                      className="fb-like"
                      data-share="true"
                      data-width="200"
                      data-show-faces="true">
                    </div>
                  </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }

});

// <li><button id="facebook" className="btn btn-primary" onClick={this.facebookLogin}>F</button></li>
module.exports = Navbar;
