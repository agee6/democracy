var AppDispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/Constants');


var ApiActions = {

  loginToFacebook: function(bookList){

    AppDispatcher.dispatch({
      actionType: "LOGGED_IN",
      results: "logged in"
    });
  },

};

module.exports = ApiActions;
