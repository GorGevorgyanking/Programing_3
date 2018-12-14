var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
   res.redirect("index.html");
});

app.listen(3000, function () {
   console.log("Example is running on port 3000");
});


var cnox = require("./public/livingcreature");
var grass = require("./public/grass");
/*
var utich = require("./public/utich");
var hoviv = require("./public/hoviv");
var amenaker = require("./public/amenaker");
var gishatich = require("./public/gishatich");
*/



