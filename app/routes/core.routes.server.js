module.exports = function(app){
  var core = require('../controllers/core.controllers.server.js');
  app.use("/index", core.home);
  app.use("/registro", core.registro);
  app.use("/resultados", core.resultados);
  app.use("/classificacao", core.classificacao)
  app.use("/contato.json", core.contato);
  app.use("/contato.html", core.contatoHTML);
  app.use("/turma.html", core.turma);
  app.route("/agendamento")
    .get(core.agendamento)
    .post()
  app.use("/", core.home);
}
