var Jogador = require('mongoose').model('Jogador');

module.exports.createJogador = function(req, res, next){
  Jogador.findOne({"nome":req.body.nome}, function(err, jogador) {
    if(jogador != null){
      var aviso = "Já existe um(a) jogador(a) com esse nome. Tente novamente.";
      res.render('aviso', {"aviso":aviso});
    } else{
      var jogador = new Jogador(req.body);
      jogador.save(function (err) {
        if(err){
          next(err);
        }else{
          res.redirect("/jogador/"+jogador._id);
        }
      });
    }
  });
}

module.exports.listaJogadores = function(req, res, next){
  Jogador.find({}, function(err, jogadores) {
    if(err){
      next(err);
    } else {
      res.render("lista-jogadores", {"jogadores":jogadores})
    }
  });
}

module.exports.getByIdJogador = function(req, res, next, id){
  Jogador.findById(id, function(err, jogador){
    if(err){
      res.json({});
    }else{
      req.jogador = jogador;
      next();
    }
  });
}

module.exports.confirmacaoJogador = function(req, res, next){
  var aviso = "O jogador(a) " + req.jogador.nome + " da cidade ";
  aviso += req.jogador.cidade + " foi registrado com sucesso!"
  res.render('aviso', {"aviso":aviso});
}

module.exports.update = function(req, res, next){
  Jogador.findByIdAndUpdate(
    req.jogador.id,
    req.body,
    function(err, jogador2){
      if(err){
        next(err);
      }else{
        res.json(jogador2);
      }
    }
  );
}

module.exports.remove = function(req, res, next){
  Jogador.findByIdAndRemove(
    req.jogador.id,
    req.body,
    function(err, jogador2){
      if(err){
        next(err);
      }else{
        res.json(jogador2);
      }
    }
  );
}
