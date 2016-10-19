var React = require('react');
var APIUtil = require('../apiUtil.js');
var UserStore = require('../stores/UserStore.js');
var ApiActions = require('../actions/api_actions.js');
var States = require('../constants/States.js');
var OutputData = require('../constants/OutputData.js');




var Country = React.createClass({
  getInitialState: function(){
    return({loggedIn: UserStore.loggedIn(), username: null, password: null, message: ""})
  },
  componentDidMount: function(){
    this.userIndex = UserStore.addListener(this._onChange);
  },
  countryClick: function(event){
    var stateCode = event.currentTarget.id;
    if(stateCode === "ME"){
      this.props.nextClick("ME");
    }else if(stateCode === "NE"){
      this.props.nextClick("NE");
    }else{
      OutputData.location = stateCode; 
      this.props.nextClick("Result");
    }
  },

  render: function() {
    var allButtons = [];
    var stateKeys = Object.keys(States);
    for (var i = 0; i < stateKeys.length; i++) {
      allButtons.push(<button key={stateKeys[i]} id={stateKeys[i]} onClick={this.countryClick}>{States[stateKeys[i]]}</button>);
    }
    return (
      <div className="inner container">
        <div className="center container">
          <h2>Which state will you vote in? </h2>
          <div className="input-buttons">
            {allButtons}

          </div>
        </div>
      </div>

    );
  }

});

module.exports = Country;
