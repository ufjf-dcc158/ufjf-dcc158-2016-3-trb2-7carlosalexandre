var Jogador = require('mongoose').model('Jogador');
var Partida = require('mongoose').model('Partida');

module.exports.create = function(req, res,
 next){
   var user = new User(req.body);
   user.save(function (err) {
     if(err){
       next(err);
     }else{
       res.json(user);
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
  User.findOne({"_id":id}, function(err, user){
    if(err){
      res.json({});
    }else{
      req.user = user;
      next();
    }
  });
}

module.exports.read = function(req, res, next){
  res.json(req.user);
}

module.exports.update = function(req, res, next){
  User.findByIdAndUpdate(
    req.user.id,
    req.body,
    function(err, user2){
      if(err){
        next(err);
      }else{
        res.json(user2);
      }
    }
  );
}

module.exports.remove = function(req, res, next){
  User.findByIdAndRemove(
    req.user.id,
    req.body,
    function(err, user2){
      if(err){
        next(err);
      }else{
        res.json(user2);
      }
    }
  );
}
