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
  Partida.find({}, function(err, partidas) {
    if(err){
      next(err);
    } else {
      res.render('resultados', {"partidas":partidas});
    }
  });
}

module.exports.classificacao = function (req, res, next) {
  Jogador.find({}, function(err, jogadores) {
    if(err){
      next(err);
    } else {
      res.render('classificacao', {"jogadores":jogadores});
    }
  });
}

module.exports.contato = function (req, res, next) {
  res.render("contato");
}
