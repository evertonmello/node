var express = require('express');
var router = express.Router();
var mongoose = require('../db/mongoose');
var soldadosModel = require('../model/strompperModel');

var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;


router.get('/', function(req, res){	
	soldadosModel.find(function (err, soldados) {
	  if (err) res.send(err);
	  res.send(soldados);
	});
});

router.get('/:id', function(req, res){
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