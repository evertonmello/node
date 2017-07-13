var express = require('express'),
	router = express.Router(),
	mongoose = require('../db/mongoose'),
	soldadosModel = require('../model/strompperModel'),
	passport = require('passport'),
	BasicStrategy = require('passport-http').BasicStrategy,	
	auth = require('../helpers/auth.js');

//basic authentication configuration...
passport.use(new BasicStrategy(function (username, password, done){
	if(username.valueOf() == 'admin' && password.valueOf() == 'admin'){
		return done(null, true);
	}else{
		return done(null, false);
	}
  })
);

router.get('/',auth.middleware, function(req, res){	
	soldadosModel.find(function (err, soldados) {
	  if (err) res.send(err);
	  res.send(soldados);
	});
});

router.get('/:id',passport.authenticate('basic', {sessions:false}), function(req, res){
	soldadosModel.findOne({'idade': req.params.id}, function (err, soldados) {
	  if (err) res.send(err);
	  res.send(soldados);
	});		
});

router.post('/create', function(req, res, next){
	res.send('!!');
});

router.put('/update', function(){
	res.send('update');
});

router.delete('/delete', function(){
	res.send('delete');
});

module.exports = router;