var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
   res.redirect("index.html");
});

app.listen(3000, function () {
   console.log("Example is running on port 3000");
});


/*var cnox = require("./modules/livingcreature");
var grass = require("./modules/grass");
var utich = require("./modules/utich");
var hoviv = require("./modules/hoviv");
var amenaker = require("./modules/amenaker");
var gishatich = require("./modules/gishatich");


*/

