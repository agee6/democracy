var React = require('react');
var ReactDOM = require('react-dom');
// var History = require('react-router').History;

//components
var Navbar = require('./components/Navbar.jsx');
var GraphArea = require('./components/GraphArea.jsx');
var SideBar = require('./components/SideBar.jsx');
var Footer = require('./components/Footer.jsx');

//root html element
var root = document.getElementById('react-content');

//stores
var UserStore = require('./stores/UserStore.js');

//actions
var ApiActions = require('./actions/api_actions');


//base App
var App = React.createClass({
  getInitialState: function(){
    return({loggedIn: UserStore.loggedIn()});
  },
  componentDidMount: function(){

  },
  _onChange: function(){
    if(UserStore.loggedIn()){
      APIUtil.getUserBooks();
      APIUtil.getCurrentBook();
    }else{
      // ApiActions.emptyShelves();
      // ApiActions.deleteCurrentBook();

    }

    this.setState({loggedIn: UserStore.loggedIn()});
  },
  render: function(){

    return (
      <div className="site-wrapper">

        <div className="site-wrapper-inner">

          <div className="cover-container">
            <Navbar />
            <GraphArea />
            <Footer />
          </div>
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
