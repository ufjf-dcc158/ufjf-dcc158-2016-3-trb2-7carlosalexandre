module.exports = function(app){
  var user = require("../controllers/user.controllers.server.js");
  app.route("/user")
    .post(user.createJogador)
    .get(user.listaJogadores);
  app.route("/partida")
      .post(user.createPartida)
      .get(user.listaJogadores);
  app.route("/user/:userId")
    .get(user.readJogador)
    .put(user.update)
    .delete(user.remove);
  app.param("userId", user.getById);
  app.route("/partida/:partidaId")
    .get(user.readPartida)
    .put(user.update)
    .delete(user.remove);
  app.param("partidaId", user.getByIdPartida);

}
