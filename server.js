
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");
var port = process.env.PORT || 8080;
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
