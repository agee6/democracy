var hello = require('hellojs');


hello.init({
	facebook: 1069565296472933,
}, {redirect_uri: 'redirect.html'});

var helloUtil = {
  loginToFacebook: function(){
    hello('facebook').login();
  },
  facebook: function(action){
    switch(action){
      case "login":
        hello('facebook').login();
        break;
      case "getTrump":

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
});
