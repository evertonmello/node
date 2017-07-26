/*	var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	debug = require('debug')('appjs'),
	methodOverride = require('method-override'),
	mongoose = require('mongoose'),
	Soldado = require('./model/strompperModel'),
	passport = require('passport');
    

app.use(bodyParser.json()); 
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('X-HTTP-Method')); //sadsda
app.use(methodOverride('_method'));
app.use(methodOverride('Access-Control-Allow-Origin'));

app.use(passport.initialize());
app.use('/', require('./routes'));


module.exports = app;
*/

var x = {
	value :0,
	add : function(argument) {
		return this.value++;
	}
}

var validatorCreate = function(){
	var _x;


	var _validar = function(bool){
		if(bool){
			return 10;
		}else{
			return 20;
		}	
	}

	return{
		validar: _validar
	};
}

var validador = validatorCreate();

var vldr = (function(){
	var _x;

	var _validar = function(bool){
		if(bool){
			return 10;
		}else{
			return 20;
		}	
	}	

	return{
		validar: _validar
	};
})();

var exp = /\(\d{2}\) \d{4,5}-\d{4}/g;

var regExp = /\w{3}\s\d{2}\s\d{4}\s\d{2}\s\d{2}/g;


var str = 'dasads oct 24 1958 87 87 asddsadasv! sdg 9874 98 98 !da dsc 98 9854 98 54 dasads oct 24 1958 87 87 asddsadasv! sdg 9874 98 98 !da dsc 98 9854 98 54 dasads oct 24 1958 87 87 asddsadasv! sdg 9874 98 98 !da dsc 98 9854 98 54 dasads oct 24 1958 87 87 asddsadasv! sdg 9874 98 98 !da dsc 98 9854 98 54 dasads oct 24 1958 87 87 asddsadasv! sdg 9874 98 98 !da dsc 98 9854 98 54'


var x = '(11) 59874-9874 asdsadasads (12) 59874-9874 asddas (11) 59874-9874 dsadasdas (11) 59874-9874';

var a,b,c,d,e,f;

a = 'undefined';
b = 'a';
c = '0';
d = "	";
e = 'a';
/*console.log(!!a);
console.log(!!b);
console.log(!!c);
console.log(!!d);
console.log(!!e);


i

f(!a || !b || !c || !d){
	console.log("!!!");
}
*/

var letra = {
	x: "x",
	v:"v"
};

var b = {
	c : "c"
};

Object.setPrototypeOf(b,letra);

console.log(b.x + " " + b.v);

//console.log(str.match(regExp));


