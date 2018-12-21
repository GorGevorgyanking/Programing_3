var LivingCreature = require("./modules/livingcreature");
var Grass = require("./modules/grass");
var Utox = require("./modules/utich");
var Hov = require("./modules/hoviv");
var Amen = require("./modules/amenaker");
var Gisho = require("./modules/gishatich").Gishatich;


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
    console.log('connected');
});

var objects = require('./modules/matrix.js');

var matrix = objects.matrix;
var grassArr = objects.grassArr;
var utich = objects.utich;
var gisho = objects.gisho;
var amen = objects.amen;
var hov = objects.hov;
global.utich = utich;
global.gisho = gisho;

var mlt_utich = 0;
var mlt_gisho = 0;
var mlt_amen = 0;
var time = 0;
var exanak_multiply = 0;

var time = frameRate(5);
function frameRate(frameCount) {
    return 1000 / frameCount;
}
function rundom(num) {
    var random = Math.floor(Math.random() * num.lenght);
    return num[random];
}

setInterval(function(){
        mlt_amen++;
        mlt_gisho++;
        mlt_utich++;
        time++;  
        for (var i in grassArr) {
            grassArr[i].mul(objects);
        }
        if(mlt_utich >= 3){
            for (var i in utich) {
                utich[i].eat(objects);
            }
            mlt_utich = 0;
        }
        if(mlt_gisho >= 5){
            for (var i in gisho) {
                gisho[i].move();
            }
            mlt_gisho = 0;
        }
        if(mlt_amen >= 7){
            for (var i in amen) {
                amen[i].eat(objects);
            }
            mlt_amen = 0;
        }
        io.sockets.emit("refresh", matrix);
        if(time>=20){
            io.sockets.emit("obj", obj_arr);
            time = 0;
            obj_arr = [];
        }
        /////////////////
        exanak_multiply++;
        if (exanak_multiply >= 40) {
            exanak_multiply = 0;
            exanak++;
            if (exanak >= 4) {
                exanak = 0;
            }
        }
        if (exanak == 0) {
            io.sockets.emit('number', 0);
        }
        else if (exanak == 1) {
            io.sockets.emit('number', 1);
        }
        else if (exanak == 2) {
            io.sockets.emit('number', 2);
        }
        else if (exanak == 3) {
            io.sockets.emit('number', 3);
        }
}, time);