var hello = require('hellojs');
var apiActions = require('./actions/api_actions.js');


hello.init({
	facebook: "1069565296472933",
	twitter: 	"PxN6bFdyKncXJY4Khzw3p2XuH",
}, {redirect_uri: 'loggedIn.html'});

var helloUtil = {
  loginToFacebook: function(){
    hello('facebook').login();
  },
  facebook: function(action){
    switch(action){
      case "login":
        hello('facebook').login({scope: 'friends'});
        break;
      case "logout":
        hello('facebook').logout().then(function() {
          alert('Signed out');
        }, function(e) {
          alert('Signed out error: ' + e.error.message);
        });
        break;
      case "myFriends":
        hello('facebook').api('me').then(function(json){
            debugger;
        });
        break;
  	}
  },
	twitter: function(action){
		switch(action){
			case "login":
				hello('twitter').login().then(function(){
					console.log('logged in');
				});
				break;
			case "logout":
				hello("twitter").logout().then(function(){
					alert('Signed out');
				}, function(e){
					alert("Signed out error: " + e.error.message);
				});
				break;
			case "getData":
				break;
		}
	}
};

hello.on('auth.login', function(auth) {
	// Call user information, for the given network
	hello(auth.network).api('me').then(function(r) {
		// Inject it into the container
		var label = document.getElementById('profile_' + auth.network);
		if (!label) {
			label = document.createElement('div');
			label.id = 'profile_' + auth.network;
			document.getElementById('profile').appendChild(label);
		}
		label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
	});
	apiActions.loginToFacebook();
});


module.exports = helloUtil;
