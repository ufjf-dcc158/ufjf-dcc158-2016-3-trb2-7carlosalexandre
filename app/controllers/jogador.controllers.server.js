var Jogador = require('mongoose').model('Jogador');

module.exports.createJogador = function(req, res,
 next){
   var jogador = new Jogador(req.body);
   jogador.save(function (err) {
     if(err){
       next(err);
     }else{
       res.redirect("/jogador/"+jogador._id);
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

module.exports.readJogador = function(req, res, next){
  res.json(req.jogador);
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
