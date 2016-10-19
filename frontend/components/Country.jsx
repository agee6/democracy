var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var helloUtil = require('..//helloUtil');


var Country = React.createClass({
  getInitialState: function(){
    return({loggedIn: UserStore.loggedIn(), username: null, password: null, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },

  render: function() {
    return (
      <div className="inner container">
        <div className="center container">
          <h2>Which state will you vote in? </h2>
          <div className="input-buttons">

          </div>
        </div>
      </div>

    );
  }

});

module.exports = Country;
