module.exports = function(app){
  var core = require('../controllers/core.controllers.server.js');
  app.use("/contato.json", core.contato);
  app.use("/contato.html", core.contatoHTML);
  app.use("/turma.html", core.turma);
  app.use("/", core.home);

}
