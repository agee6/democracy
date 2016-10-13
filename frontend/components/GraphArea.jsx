var React = require('react');
var DataStore = require('../stores/DataStore.js');


var GraphArea = React.createClass({

  getInitialState: function(){

    return({});
  },
  componentDidMount: function(){

  },
  componentWillUnmount: function(){

  },
  _onChange: function(){

  },
  render: function(){

    return (
      <section className="bookshelf">

          <div className="menu">
            <div className="FullBookShelf">
              <label className="ShelfLabel" id="ToRead">To Read</label>
              <label className="ShelfLabel" id="Read">Read</label>
            </div>
          </div>

      </section>
    );
  }
})
module.exports = GraphArea;
