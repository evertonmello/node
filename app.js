	var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	debug = require('debug')('appjs'),
	methodOverride = require('method-override'),
	Soldado = require('./model/strompperModel'),
	passport = require('passport');
    

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));

//app.use(bodyParser.json()); 


app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(methodOverride('Access-Control-Allow-Origin'));

app.use(passport.initialize());

app.use('/', require('./routes'));


module.exports = app;