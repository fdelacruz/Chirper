var passport = require('passport');
var LocalStrategy = require('passport-local');

var LocallyDB = require('locallydb');
var db = new LocallyDB('./.data');
var users = db.collection('users');

var  crypto = require('crypto');

function hash(password) {
	return crypto.createHash('sha512').update(password).digest('hex');
}

passport.use(new LocalStrategy(function (username, password, done) {
	var user = users.where({ username: username, passwordHash: hash(password) }).items[0];

	if (user) {
		done(null, user);
	} else {
		done(null, false);
	}
}));

passport.serializeUser(function (user, done) {
	done(null, user.cid);
});

passport.deserializeUser(function (cid, done) {
	done(null, users.get(cid));
});