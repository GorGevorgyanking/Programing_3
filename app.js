var LivingCreature = require("./modules/livingcreature");
var Grass = require(".//modules/grass");
var Utox = require("./modules/utich");
var Hov = require("./modules/hoviv");
var Amen = require("./modules/amenaker");
var Gisho = require("./modules/gishatich");


var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

io.on('connection', function (socket) {
    socket.emit("first matrix", matrix);
});

var objects = require('./modules/matrix.js');

var matrix = objects.matrix;
var grassArr = objects.grassArr;
var utich = objects.utich;
var gisho = objects.gisho;
var amen = objects.amen;
var hov = objects.hov;

var time = frameRate(5);
function frameRate(frameCount) {
    return 1000 / frameCount;
}

function draw() {
    for (var i in grassArr) {
        grassArr[i].mul(matrix);
    }
    for (var i in utich) {
        utich[i].eat(matrix);
    }/*
    for (var i in gisho) {
        gisho[i].eat();
    }
    for (var i in amen) {
        amen[i].eat();
    }*/
}
setInterval(draw, time);
/*for (var i in hov) {
    hov[i].eat();
}
*/

console.log(matrix);