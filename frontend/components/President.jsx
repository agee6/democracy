var React = require('react');
var images = require('../constants/imageConsts.js');


var President = React.createClass({
  getInitialState: function(){
    return({id:this.props.id});
  },
  faceClick: function(){
    this.props.faceClick(this.state.id);
  },


  render: function() {

    return (
      <div className="president" onClick={this.faceClick}>
        <img className="president-images" src={images[this.props.id]} alt={this.props.id} height="100" width="100" />
      </div>

    );
  }

});

module.exports = President;
