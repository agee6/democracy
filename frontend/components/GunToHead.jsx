var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var OutputData = require('../constants/OutputData.js');
var President = require('./President');


var GunToHead = React.createClass({
  getInitialState: function(){
    return({gun: false});
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },
  faceClick: function(faceID){
    OutputData.gun = faceID;
    this.props.nextClick("Loc");
  },
  shootClick: function(){
    if(this.state.gun){
      this.props.nextClick("Loc");
    }else{
      this.setState({gun: true});
    }
  },
  render: function() {
    var title, subtitle, buttonText;
    if(this.state.gun){
      title = "Okay, but seriously...";
      subtitle = "Your children will have to live under one of these, who do you choose?";
      buttonText = "Really, no preference"
    }else{
      title = "If you absolutely had to choose one who would it be?";
      subtitle = "One or the other."
      buttonText ="Neither";
    }

    return (
      <div className="inner">
          <h2>{title}</h2>
          <h3>{subtitle} </h3>
          <div className="vertical-container">
            <div className='president-force-div'>
              <President id="DT" faceClick={this.faceClick} />
              <President id="HC" faceClick={this.faceClick} />
            </div>
            <button className="btn btn-primary" onClick={this.shootClick}>{buttonText} </button>

          </div>
      </div>

    );
  }

});

module.exports = GunToHead;
