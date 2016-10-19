var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var helloUtil = require('..//helloUtil');


var Maine = React.createClass({
  getInitialState: function(){

    return({loggedIn: UserStore.loggedIn(), username: null, password: null, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },

  render: function() {

    return (
      <div className="masthead clearfix">
        <div className="inner container">
          <h3 className="masthead-brand">Cover</h3>
          <nav>
            <ul className="nav masthead-nav">
              <li className="active"><a href="#">Home</a></li>
              <li onClick={this.getTrumpFollwers}> Get Trump Follwers</li>
              <li><button onClick={this.facebookLogin}>Facebook</button></li>
              <li><button onClick={this.facebookLogout}>Logout</button></li>
              <li><button onClick={this.getMyFacebook}>MyFollowers</button></li>
            </ul>
          </nav>
        </div>
      </div>

    );
  }

});

module.exports = Maine;
