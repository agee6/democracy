var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var OutputData = require('../constants/OutputData.js');
var President = require('./President');


var GunToHead = React.createClass({
  getInitialState: function(){
    this.toWhere = "/Search";
    return({loggedIn: UserStore.loggedIn(), username: null, password: null, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },
  faceClick: function(faceID){
    OutputData.gun = faceID;
    this.props.nextClick("Loc");
  },
  render: function() {

    return (
      <div className="inner container">
        <div className="center container">
          <h2>Who is your favorite candidate? </h2>
          <h3>i.e. the candidate you would definitely vote for if not for strategy concerns </h3>
          <div className="input-buttons">
            <President id="DT" faceClick={this.faceClick} />
            <President id="HC" faceClick={this.faceClick} />
            <button >Just Shoot me </button>

          </div>
        </div>
      </div>

    );
  }

});

module.exports = GunToHead;
