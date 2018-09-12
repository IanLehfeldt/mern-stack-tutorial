const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

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
				} else {
					//create new user with given profile id
					new User({ googleId: profile.id }).save();
				}
			});
		}
	)
);

//Dont need to export module because we require the whole thing on its own thru index.js
