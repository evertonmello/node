var express = require('express');
var router = express.Router();
var mongoose = require('../db/mongoose');
var soldadosModel = require('../model/strompperModel');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;


//basic authentication config...
passport.use(
	new BasicStrategy(function (username, password, done){
	if(username.valueOf() == 'admin' && password.valueOf() == 'admin'){
		return done(null, true);
	}else{
		return done(null, false);
	}
  })
);

router.get('/',passport.authenticate('basic', {sessions:false}), function(req, res){	
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