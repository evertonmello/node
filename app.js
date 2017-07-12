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


app.use('/', require('./routes'));

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we re connected');
});


module.exports = app;