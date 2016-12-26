var Partida = require('mongoose').model('Partida');
var Jogador = require('mongoose').model('Jogador');

module.exports.createPartida = function(req, res, next){
  Jogador.findOne( {"_id":req.body.j1}, function(err, j1) {
    if(err){
      next(err);
    } else {
      Jogador.findOne({"_id":req.body.j2}, function(err, j2) {
        if(err){
          next(err);
        } else {
          Partida.findOne({"nome":req.body.nome}, function(err, partida){
            if(partida != null){
              var aviso = "Já existe uma partida com esse nome. Tente novamente.";
              res.render('aviso', {"aviso":aviso});
            }else{
              var partidaNova = new Partida(req.body);
              if(j1.id == j2.id){
                var aviso = "A partida não pode ser criada pois os jogadores são iguais. Tente novamente.";
                res.render('aviso', {"aviso":aviso});
              }else{
                partidaNova.save(function (err) {
                  if(err){
                    next(err);
                  }else{
                    res.redirect("/partida/"+partidaNova._id);
                  }
                });
              }
            }
          });
        }
      });
    }
  });
}

module.exports.confirmacaoPartida = function(req, res, next){
  Jogador.findById(req.partida.j1, function(err, jogador) {
    if(err){
      next(err);
    } else {
      var jogador1 = jogador
      Jogador.findById(req.partida.j2, function(err, jogador) {
        if(err){
          next(err);
        } else {
          var jogador2 = jogador;
          var aviso = "A partida " + req.partida.nome;
          aviso += " com " + jogador1.nome + " (Jogador 1) e ";
          aviso += jogador2.nome + " (Jogador 2) foi registrado com sucesso!";
          res.render('aviso', {"aviso":aviso});
        }
      });
    }
  });
}

module.exports.getByIdPartida = function(req, res, next, id){
  Partida.findById(id, function(err, partida){
    if(err){
      res.json({});
    }else{
      req.partida = partida;
      next();
    }
  });
}
