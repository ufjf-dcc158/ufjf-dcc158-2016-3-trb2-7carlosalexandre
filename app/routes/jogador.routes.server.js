module.exports = function(app){
  var jogador = require("../controllers/jogador.controllers.server.js");
  app.route("/jogador")
    .post(jogador.createJogador)
    .get(jogador.listaJogadores);
  app.route("/jogador/:jogadorId")
    .get(jogador.readJogador)
    .put(jogador.update)
    .delete(jogador.remove);
  app.param("jogadorId", jogador.getById);
}
