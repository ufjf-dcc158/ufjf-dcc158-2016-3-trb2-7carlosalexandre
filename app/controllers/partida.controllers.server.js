var Partida = require('mongoose').model('Partida');
var Jogador = require('mongoose').model('Jogador');

module.exports.createPartida = function(req, res,
 next){
   var partida = new Partida(req.body);
   Jogador.findOne({_id:req.body.j1}, function(err, j1) {
     if(err){
       next(err);
     } else {
       partida.j1 = j1;
       partida.j2 = j2;
       partida.save(function (err) {
         if(err){
           next(err);
         }else{
           res.redirect("/partida/"+partida._id);
         }
       });
     }
   });
}

module.exports.readPartida = function(req, res, next){
  res.json(req.partida);
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
