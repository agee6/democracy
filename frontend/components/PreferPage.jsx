var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var helloUtil = require('../helloUtil');
var President = require('./President.jsx');
var OutputData = require('../constants/OutputData.js');


var PreferPage = React.createClass({
  getInitialState: function(){
    this.toWhere = "/Search";
    return({loggedIn: UserStore.loggedIn(), username: null, password: null, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },

  faceClick: function(faceID){
    OutputData.preferred = faceID;
    this.props.nextClick("Gun");
  },

  render: function() {

    return (
      <div className="inner">

          <h2>Who is your favorite candidate? </h2>
          <h3>i.e. the candidate you would definitely vote for if not for strategy concerns </h3>
          <div className="president-input-div">
            <President id="EM" faceClick={this.faceClick} />
            <President id="DT" faceClick={this.faceClick} />
            <President id="GJ" faceClick={this.faceClick} />
            <President id="HC" faceClick={this.faceClick} />
            <President id="JS" faceClick={this.faceClick} />
            <President id="VS" faceClick={this.faceClick} />

          </div>
      </div>

    );
  }

});

module.exports = PreferPage;
