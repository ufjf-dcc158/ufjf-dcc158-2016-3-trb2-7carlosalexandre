var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PartidaSchema = new Schema({
  nome: { type: String, required: true},
  j1: {type: Schema.ObjectId, ref: 'Jogador'},
  j2: {type: Schema.ObjectId, ref: 'Jogador'},
  empate: { type: Boolean, default: false},
  vencedor: {type: Schema.ObjectId, ref: 'Jogador'},
  perdedor: {type: Schema.ObjectId, ref: 'Jogador'},
  finalizada: { type: Boolean, default: false}
});

mongoose.model('Partida', PartidaSchema);
