//All of the intitial application set-up
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
//Must define user schema before we call it in passport.js
require('./models/user');
require('./services/passport');

const app = express();

app.use(
    cookieSession({
        // 30 days, 24 hours in a day, 60 minutes in an hour, 60 seconds in a min, 1000 miliseconds in a second.
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

//passport needs to know to use cookie session
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);
//We exported the entire function from the authRoutes export and call it with the app object.
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Listening on port:', PORT));