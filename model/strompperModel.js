var mongoose = require('mongoose');

var SoldadoSchema = mongoose.Schema({
    name: String,
    idade: Number,
    facebook : {
    	id: String,
    	token: String,
    	email: String,
    	name: String
    }
});

var Soldado = mongoose.model('Soldado', SoldadoSchema);

module.exports = Soldado;