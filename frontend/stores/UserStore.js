var Store = require('flux/utils').Store;
var _users = [];
var needsToLogin = false;
var Constants = require('../constants/Constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = new Store(AppDispatcher);
var loggedIn = false;


var resetUser = function(user){
  _users = [];
  _users[0] = user;
  loggedIn = true; 
};
var updateNeeds = function(need){
  needsToLogin = need;
};
UserStore.loggedIn = function(){
  if(_users[0] === undefined || _users[0] === null){
    return false;
  }else{
    return true;
  }
};
UserStore.needsToLogin = function(){
  return needsToLogin;
};

UserStore.currentUser = function () {
  return _users[0];
};
UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case "LOGGED_IN":
      var result = resetUser(true);
      UserStore.__emitChange();
      break;

  }
};


module.exports = UserStore;
