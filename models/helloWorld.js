var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var helloSchema = new Schema({
    linguagem: String,
    descricao: String,
});


module.exports = mongoose.model('hello', helloSchema);