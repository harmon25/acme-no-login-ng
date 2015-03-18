var express = require('express');
var mongoose = require('mongoose');

// ---
// ---
// ---

var UserSchema = new mongoose.Schema({
	name: String,
	user: String,
	pass: String
});

// ---

var User = mongoose.model('User', UserSchema);

// ---

[['Administrator', 'admin', 'admin'], ['User', 'user', 'user'], ['Jules', 'bad', 'motherfucker']].forEach(function (cred) {
	var instance = new User();

	// ---

	instance.name = cred[0];
	instance.user = cred[1];
	instance.pass = cred[2];

	// ---

	instance.save();
});

// ---
// ---
// ---

var app = express();

// ---

app.set('views', __dirname);
app.set('view engine', 'jade');

// ---

app.use(require('body-parser').json());

// ---

app.get('/', function(req, res) {
	res.render('index', {});
});

app.post('/', function(req, res) {
	var userName = req.body.user;
	var password = req.body.pass;
	if (typeof userName == 'object' || typeof password =='object'){
		return res.status(500).send({message: "nice try you 1337 h4ckz0r...get outa town"});
	} else {
	User.findOne({user: userName, pass: password}, function (err, user) {
		if (err) {
			return res.status(500).send({message: err.message});
		}

		// ---

		if (!user) {
			return res.status(500).send({message: 'Sorry!'});
		}

		// ---

		return res.status(200).send({message: 'Welcome back ' + user.name + '!!!'});
	});
}
});

// ---

var server = app.listen(49090, function () {
	mongoose.connect('mongodb://localhost/acme-no-login');

	// ---

	console.log('listening on port %d', server.address().port);
});

// ---
