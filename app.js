var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var debug = require('debug')('appjs');
var methodOverride = require('method-override');
var Soldado = require('./model/strompperModel');

var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(methodOverride('Access-Control-Allow-Origin'));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

module.exports = app;