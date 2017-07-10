var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var debug = require('debug')('appjs');
var methodOverride = require('method-override');


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(methodOverride('Access-Control-Allow-Origin'));


app.use('/', require('./routes'));


module.exports = app;