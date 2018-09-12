const passport = require('passport');

module.exports = (app) => {
    //Route handling google authentication
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
    );
    
    //Once callback from google oauth is received, push to passport
    app.get('/auth/google/callback/', passport.authenticate('google'));
    
    //Testing authentication
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
