var Jogador = require('mongoose').model('Jogador');
var Partida = require('mongoose').model('Partida');

module.exports.home = function (req, res, next) {
  res.render('index');
}

module.exports.registro = function (req, res, next) {
  res.render('registro');
}

module.exports.agendamento = function (req, res, next) {
  Jogador.find({}, function(err, jogadores) {
    if(err){
      next(err);
    } else {
      res.render('agendamento', {"jogadores":jogadores});
    }
  });

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
