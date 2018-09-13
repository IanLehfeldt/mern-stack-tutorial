//prod.js
//production keys here

module.exports = {
	googleClientID: process.env.GOOGLE_API_CLIENTID,
	googleClientSecret: process.env.GOOGLE_API_CLIENT_SECRET,
	mongoURI: process.env.MONGOLAB_TEAL_URI,
	//Random string of whatever, can be anything
	cookieKey: process.env.COOKIE_KEY
};
