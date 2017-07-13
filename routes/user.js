var express = require('express'),
	router = express.Router(),
	mongoose = require('../db/mongoose'),
	user = require('../model/userModel');

router.get('/', function(req, res){
	user.find(function (err, users) {
	  if (err) res.send(err);
	  res.send(users);
	});
});

module.exports = router;