var Partida = require('mongoose').model('Partida');
var Jogador = require('mongoose').model('Jogador');

module.exports.criarPartida = function(req, res, next){
  Jogador.findOne({"_id":req.body.j1}, function(err, j1) {
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

module.exports.resultadoPartida = function(req, res, next){
  Partida.findById(req.body.partida, function(err, partida){
    if(err){
      next(err);
    }else{
      var resultadoPartida = partida;
      Jogador.findById(partida.j1, function(err, j01) {
        if(err){
          next(err);
        } else {
           Jogador.findById(partida.j2, function(err, j02) {
             if(err){
               next(err);
             } else {
              // if(!partida.finalizada){
                var jogador1 = j01;
                var jogador2 = j02;
                var Q1 = Math.pow(10, (jogador1.ELO/400));
                var Q2 = Math.pow(10, (jogador2.ELO/400));
                var PteEsperadoJ1 = Q1/(Q1+Q2);
                var PteEsperadoJ2 = Q2/(Q1+Q2);
                if(req.body.resultado == "empate"){
                  jogador1.ELO = (jogador1.ELO + 32*(0.5 - PteEsperadoJ1)).toFixed(3);
                  jogador2.ELO = (jogador2.ELO + 32*(0.5 - PteEsperadoJ2)).toFixed(3);
                  jogador1.empates += 1;
                  jogador2.empates += 1;
                  resultadoPartida.empate = true;
                  resultadoPartida.vencedor = null;
                  resultadoPartida.perdedor = null;
                } else if (req.body.resultado == "venceuj1") {
                  jogador1.ELO = (jogador1.ELO + 32*(0.5 - PteEsperadoJ1)).toFixed(3);
                  jogador2.ELO = (jogador2.ELO + 32*(0.5 - PteEsperadoJ2)).toFixed(3);
                  jogador1.vitorias += 1;
                  jogador2.derrotas += 1;
                  resultadoPartida.empate = false;
                  resultadoPartida.vencedor = jogador1.id;
                  resultadoPartida.perdedor = jogador2.id;
                } else if (req.body.resultado == "venceuj2"){
                  jogador1.ELO = (jogador1.ELO + 32*(0.5 - PteEsperadoJ1)).toFixed(3);
                  jogador2.ELO = (jogador2.ELO + 32*(0.5 - PteEsperadoJ2)).toFixed(3);
                  jogador1.derrotas += 1;
                  jogador2.vitorias += 1;
                  resultadoPartida.empate = false;
                  resultadoPartida.vencedor = jogador2.id;
                  resultadoPartida.perdedor = jogador1.id;
                } else {
                  var erro = "Ocorreu erro no processamento das informações. Tente novamente."
                  res.render('aviso', {"aviso":erro});
                  next();
                }

                resultadoPartida.finalizada = true;

                Partida.findByIdAndUpdate(partida.id, resultadoPartida, {new: true}, function(err, p){
                    if(err){
                      next(err);
                    }else{
                      Jogador.findByIdAndUpdate(p.j1, jogador1, {new: true}, function(err, j1){
                          if(err){
                            next(err);
                          }else{
                            Jogador.findByIdAndUpdate(p.j2, jogador2, {new: true}, function(err, j2){
                                if(err){
                                  next(err);
                                }else{
                                  if(p.empate){
                                    aviso = "A partida " + p.nome + " foi finalizada com empate."
                                  } else if (j1.id == partida.vencedor) {
                                    aviso = "A partida " + p.nome + " foi finalizada com a vitória ";
                                    aviso += "do jogador " + j1.nome + ".";
                                  } else if (j2.id == partida.vencedor) {
                                    aviso = "A partida " + p.nome + " foi finalizada com a vitória ";
                                    aviso += "do jogador " + j2.nome + ".";
                                  }
                                  res.render('aviso', {"aviso":aviso});
                                }
                            });
                          }
                      });
                    }
                });
              // }else{
              //   // var aviso = "A partida já foi finalizada. Tente novamente.";
              //   // res.render('aviso', {"aviso":aviso});
              // }
             }
           });
        }
      });
    }
  });
}
