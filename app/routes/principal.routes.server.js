module.exports = function(app){
  var principal = require('../controllers/principal.controllers.server.js');
  app.use("/index", principal.home);
  app.use("/registro", principal.registro);
  app.use("/resultados", principal.resultados);
  app.use("/classificacao", principal.classificacao);
  app.route("/agendamento")
    .get(principal.agendamento);
  app.use("/", principal.home);
}
