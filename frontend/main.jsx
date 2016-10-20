var React = require('react');
var ReactDOM = require('react-dom');
// var History = require('react-router').History;

//components
var Welcome = require('./components/Welcome.jsx');
var Navbar = require('./components/Navbar.jsx');
var GraphArea = require('./components/GraphArea.jsx');
var SideBar = require('./components/SideBar.jsx');
var Footer = require('./components/Footer.jsx');
var GunToHead = require('./components/GunToHead.jsx');
var Country = require('./components/Country.jsx');
var Maine = require('./components/Maine.jsx');
var Nebraska = require('./components/Nebraska.jsx');
var PreferPage = require('./components/PreferPage.jsx');
var Result = require('./components/Results.jsx');
var Anarchy = require('./components/Anarchy.jsx');

//root html element
var root = document.getElementById('react-content');

//stores
var UserStore = require('./stores/UserStore.js');

//actions
var ApiActions = require('./actions/api_actions');

//constants
var OutputData = require('./constants/OutputData.js');


//base App
var App = React.createClass({
  getInitialState: function(){
    return({loggedIn: UserStore.loggedIn(), currentPage: "Welcome"});
  },
  componentDidMount: function(){

  },

  nextClick: function(page){
    this.setState({currentPage: page});
  },
  _onChange: function(){

  },
  render: function(){
    var pages = {
      Welcome:    <Welcome nextClick={this.nextClick} />,
      PreferPage:  <PreferPage nextClick={this.nextClick} />,
      Gun: <GunToHead nextClick={this.nextClick} />,
      Loc: <Country nextClick={this.nextClick} />,
      ME: <Maine nextClick={this.nextClick} />,
      NE: <Nebraska nextClick={this.nextClick} />,
      Result: <Result nextClick={this.nextClick} />,
      Anarchy: <Anarchy nextClick={this.nextClick} />,
      GraphArea: <GraphArea nextClick={this.nextClick} />
    }

    return (
      <div className="site-wrapper">

        <div className="site-wrapper-inner">


          <Navbar nextClick={this.nextClick} />
          <div className="container">
              {pages[this.state.currentPage]}
          </div>
          <Footer />

        </div>
      </div>
    );
  }
});


// var routes = (
//   <Route path="/" component={App}>
//
//   </Route>
// );


ReactDOM.render(<App />, root);
