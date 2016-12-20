var Jogador = require('mongoose').model('Jogador');
var Partida = require('mongoose').model('Partida');

module.exports.home = function (req, res, next) {
  res.render('index');
}

module.exports.registro = function (req, res, next) {
  res.render('registro');
}

module.exports.agendamento = function (req, res, next) {
  res.render('agendamento');
}

module.exports.resultados = function (req, res, next) {
  res.render('resultados');
}

module.exports.classificacao = function (req, res, next) {
  res.render('classificacao');
}

module.exports.contato = function (req, res, next) {
  res.render("contato");
}

module.exports.contatoHTML = function (req, res, next) {
  res.render('contato', detalhes);
}

module.exports.turma = function (req, res, next) {
  res.render('turma', {prof: professor, t:turma});
}
