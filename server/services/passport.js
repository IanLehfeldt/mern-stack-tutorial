const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

//must call serializeUser to set cookies for each session
//Takes google profile id and turns it into a mongoose model id
passport.serializeUser((user, done) => {
	done(null, user.id);
});

//Takes mongoose model id and turns it back into google profile id
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

//Authenticates user by registering  passport through a google strategy
//Needs a client id and a client secret to pass through
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		//Arrow function that is a callback
		(accessToken, refreshToken, profile, done) => {
			// console.log('AccessToken:', accessToken);
			// console.log('RefreshToken:', refreshToken);
			// console.log('Profile:', profile);
			User.findOne({ googleId: profile.id }).then((existingUser) => {
				if (existingUser) {
					//we already have a record with given profile ID
					done(null, existingUser);
				} else {
					//create new user with given profile id
					new User({ googleId: profile.id })
						.save()
						.then((user) => done(null, user));
				}
			});
		}
	)
);

//Dont need to export module because we require the whole thing on its own thru index.js
