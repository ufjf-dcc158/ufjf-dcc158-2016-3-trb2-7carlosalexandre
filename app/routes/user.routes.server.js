module.exports = function(app){
  var user = require("../controllers/user.controllers.server.js");
  app.route("/user")
    .post(user.create)
    .get(user.listaJogadores);
  app.route("/user/:userId")
    .get(user.read)
    .put(user.update)
    .delete(user.remove);
  app.param("userId", user.getById);
  
}
