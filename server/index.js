const express = require('express');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
//Must define user schema before we call it in passport.js
require('./models/user');
require('./services/passport');


mongoose.connect(keys.mongoURI);
//We exported the entire function from the authRoutes export and call it with the app object.
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Listening on port:', PORT));