module.exports = function(app){
  var core = require('../controllers/core.controllers.server.js');
  app.use("/", core.home);
  app.use("/index", core.home);
  app.use("/registro", core.registro);
  app.use("/agendamento", core.agendamento);
  app.use("/resultados", core.resultados);
  app.use("/classificacao", core.classificacao)
  app.use("/contato.json", core.contato);
  app.use("/contato.html", core.contatoHTML);
  app.use("/turma.html", core.turma);

}
