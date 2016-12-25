var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartidaSchema = new Schema({
  nome: { type: String, required: true},
  jogadorUm: {type: Schema.ObjectId, ref: 'Jogador'},
  jogadorDois: {type: Schema.ObjectId, ref: 'Jogador'},
  empate: { type: Number, default: false},
  ganhador: {type: Schema.ObjectId, ref: 'Jogador'},
  perdedor: {type: Schema.ObjectId, ref: 'Jogador'}
});

mongoose.model('Partida', PartidaSchema);
