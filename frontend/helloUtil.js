var hello = require('hellojs');


hello.init({
	facebook: 1069565296472933,
}, {redirect_uri: 'loggedIn.html'});

var helloUtil = {
  loginToFacebook: function(){
    hello('facebook').login();
  },
  facebook: function(action){
    switch(action){
      case "login":
        hello('facebook').login();
        break;
      case "logout":
        hello('facebook').logout().then(function() {
          alert('Signed out');
        }, function(e) {
          alert('Signed out error: ' + e.error.message);
        });
        break;
      case "myFriends":
        hello('facebook').api('DonaldTrump/likes').then(function(json){
            debugger;
        });
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
});


module.exports = helloUtil;
