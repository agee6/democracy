var React = require('react');
var APIUtil = require('../apiUtil.js');
var ApiActions = require('../actions/api_actions.js');
var OutputData = require('../constants/OutputData.js');


var Nebraska = React.createClass({
  getInitialState: function(){
    return({})
  },
  componentDidMount: function(){
  },
  nextClick: function(event){
    var district = event.currentTarget.id;
    if(district === "none"){
      OutputData.location = "NE";
    }else{
      OutputData.location = "NE" + district;
    }
    this.props.nextClick("Result");
  },
  render: function() {

    return (
      <div className="inner">
        <h2>Which district are you in? </h2>
        <div className="input-buttons">
          <button id="1" className="btn btn-primary" onClick={this.nextClick}>District 1</button>
          <button id="2" className="btn btn-primary" onClick={this.nextClick}>District 2</button>
          <button id="3" className="btn btn-primary" onClick={this.nextClick}>District 3</button>
          <button id="none" className="btn btn-primary" onClick={this.nextClick}>"I don't know"</button>

        </div>
      </div>

    );
  }

});

module.exports = Nebraska;
