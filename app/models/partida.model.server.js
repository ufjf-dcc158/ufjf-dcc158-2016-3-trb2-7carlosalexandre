var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartidaSchema = new Schema({
  nome: { type: String, required: true},
  j1: {type: Schema.ObjectId, ref: 'Jogador', default: null},
  j2: {type: Schema.ObjectId, ref: 'Jogador', default: null},
  empate: { type: Boolean, default: false},
  vencedor: {type: Schema.ObjectId, ref: 'Jogador', default: null},
  perdedor: {type: Schema.ObjectId, ref: 'Jogador', default: null},
  finalizada: { type: Boolean, default: false}
});

mongoose.model('Partida', PartidaSchema);
