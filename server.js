// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Initializing Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Initializing bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Requiring our module exports for api routes and passing in app as arg
require("./app/routing/apiRoutes.js")(app);

//Requiring our module exports for html routes and passing in app as arg
require("./app/routing/htmlRoutes.js")(app);


// Server listening on port 3000
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});