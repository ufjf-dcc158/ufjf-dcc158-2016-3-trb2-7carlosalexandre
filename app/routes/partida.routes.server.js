module.exports = function(app){
  var partida = require("../controllers/partida.controllers.server.js");
  app.route("/partida")
      .post(partida.criarPartida);
  app.route("/partida/:partidaId")
    .get(partida.confirmacaoPartida);
  app.param("partidaId", partida.getByIdPartida);
  app.route("/resultadoPartida")
    .post(partida.resultadoPartida);
}
