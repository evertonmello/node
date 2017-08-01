var express = require('express'),
    router = express.Router(),
	jwt = require('jwt-simple'),
	moment = require('moment'),
	config = require('../config/config.json');

router.use('/listaTelefonica', require('./listaTelefonica'));
router.use('/stromppers', require('./stromppers'));
router.use('/auth', require('./auth'));
router.use('/users', require('./user'));

router.post('/login', function(req, res, next){	
	var username = req.body.username;	
	var password = req.body.password;

	if(username == 'admin' && password == 'admin'){
		var expires = moment().add(7, 'days').valueOf();
		var token = jwt.encode({
			user: username,
			exp: expires
		}, config.jwt.jwtTokenSecret);

		res.json({
			token: token
		});
	}else{
		var err = new Error('Unauthorized user name or password');
		err.status = 401;
		next(err);
	}	
});

module.exports = router;

