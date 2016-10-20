var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var OutputData = require('../constants/OutputData.js');


var Maine = React.createClass({
  getInitialState: function(){
    return({});
  },
  componentDidMount: function(){

  },
  nextClick: function(event){
    var district = event.currentTarget.id;
    if(district === 'none'){
      OutputData.location = "ME";
    }else{
      OutputData.location = "ME" + district;
    }
    this.props.nextClick("Result");
  },
  render: function() {

    return (
      <div className="inner">
        <h2>Which district are you in? </h2>
        <div className="input-buttons">
          <button className="btn btn-primary" id="1" onClick={this.nextClick}>District 1</button>
          <button className="btn btn-primary" id="2" onClick={this.nextClick}>District 2</button>
          <button id="none" className="btn btn-primary" onClick={this.nextClick}>"I don't know"</button>

        </div>
      </div>

    );
  }

});

module.exports = Maine;
