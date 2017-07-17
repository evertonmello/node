	var express = require('express'),
	app = express(),
	methodOverride = require('method-override'),
	Soldado = require('./model/strompperModel'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	debug = require('debug')('appjs'),
	
	passport = require('passport');
    

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('Access-Control-Allow-Origin'));

app.use(passport.initialize());
app.use('/', require('./routes'));

module.exports = app;
