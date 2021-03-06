var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JogadorSchema = new Schema({
  nome: { type: String, required: true},
  cidade: { type: String, required: true},
  vitorias: { type: Number, default: 0},
  derrotas: { type: Number, default: 0},
  empates: { type: Number, default: 0},
  ELO: { type: Number, default: 0}
});

mongoose.model('Jogador', JogadorSchema);
