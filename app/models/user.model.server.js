var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JogadorSchema = new Schema({
  nome: { type: String, required: true},
  cidade: { type: String, required: true},
  vitorias: { type: Number, default: 0},
  perdas: { type: Number, default: 0},
  empates: { type: Number, default: 0},
  classificacao: { type: Number, default: 0}
});

var PartidaSchema = new Schema({
  nome: { type: String, required: true},
  jogadorUm: { type: String, required: true},
  jogadorDois: { type: String, required: true},
  empate: { type: Number, default: false},
  ganhador: { type: String, default: null},
  perdedor: { type: String, default: null},
});

mongoose.model('Jogador', JogadorSchema);
mongoose.model('Partida', PartidaSchema);
