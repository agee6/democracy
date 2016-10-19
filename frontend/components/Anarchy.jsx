var React = require('react');

var Country = React.createClass({
  getInitialState: function(){
    return({});
  },
  componentDidMount: function(){

  },
  nextClick: function(event){
    this.props.nextClick('PreferPage');
  },

  render: function() {

    return (
      <div className="inner container">
        <div className="center container">
          <h2>"well aren't we edgy?" </h2>
          <div className="input-buttons">
            <img src="http://podcast.robohara.com/wp-content/uploads/2016/06/Anarchy-psd355091.png" />
            <button className="btn btn-primary" onClick={this.nextClick}>Back to Discover</button>
          </div>
        </div>
      </div>

    );
  }

});

module.exports = Country;
