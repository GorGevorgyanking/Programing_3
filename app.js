LivingCreature = require("./public/modules/livingcreature");
Grass = require("./public/modules/grass");
Utox = require("./public/modules/utich");
Hov = require("./public/modules/hoviv");
Amen = require("./public/modules/amenaker");
Gisho = require("./public/modules/gishatich");


var express = require('express');
var matrix = require('./public/modules/matrix.js');
var path = require('path');
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
   res.redirect("index.html");
});

app.listen(3000, function () {
   console.log("Example is running on port 3000");
});


var time = frameRate(5);
 function  frameRate (frameCount)
 {
   return 1000/frameCount;
 }

function draw() {

  for (var i in grassArr) {
    grassArr[i].mul();
}
for (var i in utich) {
    utich[i].eat();
}
for (var i in gisho) {
    gisho[i].eat();
}
for (var i in amen) {
    amen[i].eat();
}
/*for (var i in hov) {
    hov[i].eat();
}
*/
}


setInterval (draw,time);