var express = require('express');
var app = express();
var d = new Date();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var arr = 	[{"id":1, "nome": "everton mello", "telefone" : "321313", "color": "blue", "data": d},
			{"id":2,"nome": "joao", "telefone" : "321313","color": "red","data": d},
			{"id":3,"nome": "maria maria", "telefone" : "321313", "color": "gray", "data": d},
			{"id":4,"nome": "embratel", "telefone" : "321313", "color": "blue","data": d},
			{"id":5,"nome": "telefonica", "telefone" : "321313", "color": "blue","data": d}];

function add(sentObj){
	 var obj = {};
	 obj.id = arr.length;
	 obj.nome = sentObj.nome;
	 obj.telefone = sentObj.telefone;	 		 
	 arr.push(obj);	
}


app.get('/', function(req, res){
	 res.setHeader("Access-Control-Allow-Origin", "*");
	 res.setHeader("XMLHttpRequest", "*");	 
	 res.send(JSON.stringify(arr));
});

app.get('/:id', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
	var result = arr.filter(function( obj ) {
	  return obj.id == req.params.id ;
	});	
	 res.send(JSON.stringify(result));
});


app.post('/post', function(req, res){
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");
	 add(JSON.parse(Object.keys(req.body)[0]));	
	 res.send('sucess');
});


var server = app.listen(3000, function(){
  console.log('Magic is happening on port 3000')
});
