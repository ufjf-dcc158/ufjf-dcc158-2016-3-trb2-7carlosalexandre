module.exports = function(app){
  var partida = require("../controllers/partida.controllers.server.js");
  app.route("/partida")
      .post(partida.createPartida);
  app.route("/partida/:partidaId")
    .get(partida.readPartida);
  app.param("partidaId", partida.getByIdPartida);
}
