process.env.NODE_ENV = process.env.NODE_ENV ||"devel";

var mongoose = require('./config/mongoose');
var express = require("./config/express");
var db = mongoose();
var app = express();
app.listen((process.env.PORT || 5000), function() {
  console.log('Node app is running on port', (process.env.PORT || 5000));
});

module.exports = app;
