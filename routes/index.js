var express = require('express');
var router = express.Router();
var d = new Date();

var arr = 	[{"id":1, "nome": "everton mello", "telefone" : "321313", "color": "blue", "data": d},
			{"id":2,"nome": "joao", "telefone" : "321313","color": "red","data": d},
			{"id":3,"nome": "maria maria", "telefone" : "321313", "color": "gray", "data": d},
			{"id":4,"nome": "embratel", "telefone" : "321313", "color": "blue","data": d},
			{"id":5,"nome": "telefonica", "telefone" : "321313", "color": "blue","data": d}];

router.get('/', function(req, res){
	 res.setHeader("Access-Control-Allow-Origin", "*");	 
	 res.send(JSON.stringify(arr));
});

router.get('/:id', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept")
	var result = arr.filter(function( obj ) {
	  return obj.id == req.params.id ;
	});	
	 res.send(JSON.stringify(result));
});

router.post('/post', function(req, res){
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
	 add(JSON.parse(Object.keys(req.body)[0]));	
	 res.send('sucess');
});

module.exports = router;