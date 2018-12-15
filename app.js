var express = require('express');
var matrix0 = require('./modules/matrix.js');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
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
for (var i in hov) {
    hov[i].eat();
}

}


setInterval (draw,time);