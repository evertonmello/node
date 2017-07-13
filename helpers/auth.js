var jwt = require('jwt-simple'),
	passport = require('passport'),   
	BasicStrategy = require('passport-http').BasicStrategy,
	moment = require('moment'),
	FacebookStrategy = require('passport-facebook').Strategy,
	User = require('../model/userModel'),
	config = require('config');

	//facebook authentication config...
	passport.serializeUser(function(user, done) {
	  done(null, user);
	});

	passport.deserializeUser(function(user, done) {
	  done(null, user);
	});

	passport.use(new FacebookStrategy({
	    clientID: "1934126740191387",
	    clientSecret: "233462cab40af020b418dead853698b9",
	    callbackURL: "http://localhost:3000/auth/facebook/callback"
	  },
	  function(accessToken, refreshToken, profile, cb, done) {
	    user = new User({id: profile.id,token: refreshToken, email: "adssdasda",name: "String" });
	     user.save(function(err) {
	        if(err)return err;        
	        return done(null, {});
	      });
	  }
));

module.exports = {
	//middleare auth configuration...
	middleware : function(req, res, next){		
	var token = req.query.token || req.headers['x-access-token'];
		if(!token){
			var err = new Error('Forbidden');
			err.status = 401;
			return next(err);
		}
		try{
			var decoded = jwt.decode(token, config.get('jwtTokenSecret'));
			var isExpired = moment(decoded.exp).isBefore(new Date());

			if(isExpired){
				var err = new Error('Unauthorized');
				err.status = 401;
				return next(err);
			}else{
				req.user = decoded.user;
				next();
			}
		}catch(err){
			return next(err);
		}
	} 
}

