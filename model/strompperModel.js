var mongoose = require('mongoose');

var SoldadoSchema = mongoose.Schema({
    name: String,
    idade: Number
});

var Soldado = mongoose.model('Soldado', SoldadoSchema);

module.exports = Soldado;