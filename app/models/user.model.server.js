var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  nome: String,
  sobrenome: String,
  email: String,
  username: String,
  password: String
});

mongoose.model('User', UserSchema);
