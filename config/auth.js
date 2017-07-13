var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('config');

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

