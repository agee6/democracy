var React = require('react');

var Country = React.createClass({
  getInitialState: function(){
    return({});
  },
  componentDidMount: function(){

  },
  nextClick: function(event){
    this.props.nextClick('Welcome');
  },

  render: function() {

    return (
      <div className="inner">

          <h2>edgy</h2>
          <div className="input-buttons">
            <div className="vertical-container">
              <div className="anarchy-div">
                <img src="http://podcast.robohara.com/wp-content/uploads/2016/06/Anarchy-psd355091.png" />
              </div>
              <button className="btn btn-primary" onClick={this.nextClick}>Back to Main Page</button>
            </div>
          </div>

      </div>

    );
  }

});

module.exports = Country;
