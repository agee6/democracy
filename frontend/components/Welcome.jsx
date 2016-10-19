var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var helloUtil = require('..//helloUtil');


var Welcome = React.createClass({
  getInitialState: function(){
    this.toWhere = "/Search";
    return({loggedIn: UserStore.loggedIn(), username: null, password: null, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },
  yesClick: function(){

    this.props.nextClick('PreferPage');

  },
  noClick: function(){
    this.props.nextClick("Anarchy");
  },

  render: function() {
    return (
      <div className="inner container">
        <div className="center container">
          <p> Welcome to Strategic Voting, are you ready to determine your strategic vote? </p>
          <button className="btn btn-primary" onClick={this.yesClick}>Yes</button>
          <button className="btn btn-primary" onClick={this.noClick}>voting is for losers</button>
        </div>
      </div>

    );
  }

});

module.exports = Welcome;
