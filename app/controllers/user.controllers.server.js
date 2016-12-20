var Jogador = require('mongoose').model('Jogador');
var Partida = require('mongoose').model('Partida');

module.exports.createJogador = function(req, res,
 next){
   var jogador = new Jogador(req.body);
   jogador.save(function (err) {
     if(err){
       next(err);
     }else{
       res.redirect("/user/"+jogador._id);
     }
   });
}


module.exports.createPartida = function(req, res,
 next){
   var partida = new Partida(req.body);
   partida.save(function (err) {
     if(err){
       next(err);
     }else{
       res.redirect("/partida/"+partida._id);
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

module.exports.getById = function(req, res, next, id){
  Jogador.findOne({"_id":id}, function(err, jogador){
    if(err){
      res.json({});
    }else{
      req.jogador = jogador;
      next();
    }
  });
}

module.exports.getByIdPartida = function(req, res, next, id){
  Partida.findOne({"_id":id}, function(err, partida){
    if(err){
      res.json({});
    }else{
      req.partida = partida;
      next();
    }
  });
}

module.exports.readJogador = function(req, res, next){
  res.json(req.jogador);
}

module.exports.readPartida = function(req, res, next){
  res.json(req.partida);
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
