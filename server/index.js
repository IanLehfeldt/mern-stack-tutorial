const express = require('express');
const app = express();
require('./services/passport');

//We exported the entire function from the authRoutes export and call it with the app object.
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('Listening on port:', PORT));