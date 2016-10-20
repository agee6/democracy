var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var President = require('./President.jsx');
var OutputData = require('../constants/OutputData.js');
var Swings = ["NV", "AZ", "CO", "IA", "OH", "NC", "FL", "PA", "NH", "NE2", "ME2", "MN", "MN", "WI"];


var Results = React.createClass({
  getInitialState: function(){
    this.toWhere = "/Search";
    return({loggedIn: UserStore.loggedIn(), username: null, password: null, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },
  getPresident: function(){
    if(OutputData.location === "UT"){
      if(OutputData.gun === "DT"){
        if(OutputData.preferred === "DT"){
          return "DT";
        }else{
          return "EM";
        }
      }else if(OutputData.gun === "HC"){
        return "HC";
      }else{
        return OutputData.preferred;
      }
    }else if(Swings.indexOf(OutputData.location) !== -1){
      if(OutputData.gun === "DT"){
        return "DT";
      }else if(OutputData.gun === "HC"){
        return "HC";
      }else{
        return OutputData.preferred;
      }
    }else{
      return OutputData.preferred;
    }
  },
  getMessage: function(){
    if(OutputData.gun === null){
      return "You would rather die than vote for either of the two major candidates, so just do what you feel to gain attention to your preffered candidate"
    }else if( Swings.indexOf(OutputData.location) !== -1 ){
      return "You live in a potential swing state. Your vote counts! Also it means you should probably vote for one the major candidates, even if you have to hold your nose."
    }else if(OutputData.location === "UT"){
      return "You live in Utah. Utah is special because it appears Evan McMullin is going to win it. Best strategy is either to vote for him or Hillary Clinton";
    }else{
      return "You don't live in a swing state, your electoral votes are already decided. Vote for who you feel so they can gain attention";
    }
  },
  faceClick: function(){
    alert("hey there");
  },
  nextClick:function(){
    this.props.nextClick("Welcome");
  },
  render: function() {
    var pres = this.getPresident();
    var message = this.getMessage();
    return (
      <div className="inner">
        <h2>Result: </h2>
        <h3>{message}</h3>
        <h1> Best strategic vote: </h1>
        <div className="vertical-container">
          <div className="result-div">
            <President id={pres} faceClick={this.faceClick} />
          </div>
          <button className="btn btn-primary" onClick={this.nextClick}>Start Over</button>
        </div>
      </div>

    );
  }

});

module.exports = Results;
