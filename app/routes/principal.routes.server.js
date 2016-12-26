module.exports = function(app){
  var principal = require('../controllers/principal.controllers.server.js');
  app.use("/index", principal.home);
  app.use("/registro", principal.registro);
  app.route("/agendamento")
    .get(principal.agendamento);
  app.route("/resultados")
    .get(principal.resultados);
  app.route("/classificacao")
    .get(principal.classificacao);
  app.use("/", principal.home);
}
