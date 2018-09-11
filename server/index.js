const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//Authenticates user by registering  passport through a google strategy
//Needs a client id and a client secret to pass through
passport.use(new GoogleStrategy());