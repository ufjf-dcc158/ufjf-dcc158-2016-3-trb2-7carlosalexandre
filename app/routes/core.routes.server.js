module.exports = function(app){
  var core = require('../controllers/core.controllers.server.js');
  app.use("/", core.home);
  app.use("/index.html", core.home);
  app.use("/registro.html", core.registro);
  app.use("/agendamento.html", core.agendamento);
  app.use("/resultados.html", core.resultados);
  app.use("/classificacao.html", core.classificacao)
  app.use("/contato.json", core.contato);
  app.use("/contato.html", core.contatoHTML);
  app.use("/turma.html", core.turma);

}
