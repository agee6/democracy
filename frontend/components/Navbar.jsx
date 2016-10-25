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
    var element;
    if(this.state.onGraph){
      element = <li className="active" onClick={this.goHome}><a href="#">Home</a></li>
    }else{
      element = <li className="active" onClick={this.toGraph}><a href="#">Graphs</a></li>
    }

    return (
      <div className="masthead clearfix">
        <div className="nav-container container-fluid">
          <h3 className="masthead-brand">Strategic Voting</h3>
          <nav>
            <ul className="nav masthead-nav">
              {element}
              <li><div class="fb-share-button" data-href="https://agee6.github.io/democracy" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fagee6.github.io%2Fdemocracy&amp;src=sdkpreparse">Share</a></div></li>
            </ul>
            <div className="fb-share-button"
              data-href="http://www.your-domain.com/your-page.html"
              data-layout="button_count">
            </div>
          </nav>
        </div>
      </div>

    );
  }

});

// <li><button id="facebook" className="btn btn-primary" onClick={this.facebookLogin}>F</button></li>
module.exports = Navbar;
