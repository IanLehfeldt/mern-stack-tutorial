const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Listening on port:', PORT));

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
            console.log('AccessToken:', accessToken);
            console.log('RefreshToken:', refreshToken);
            console.log('Profile:', profile);
             
		}
	)
);

app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['profile', 'email']
	})
);

app.get('/auth/google/callback/', passport.authenticate('google'));
