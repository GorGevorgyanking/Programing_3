 side = 10;
 grassArr = [];
 utich = [];
gisho = [];
 amen = [];
hov = [];

var LivingCreature = require("./livingcreature");
var Grass = require("./grass");
var Utox = require("./utich");
var Hov = require("./hoviv");
var Amen = require("./amenaker");
var Gisho = require("./gishatich");


matrix = [];
yQanak = 50;
xQanak = 50;
for (var y = 0; y < yQanak; y++) {

    matrix[y] = [];
    for (var x = 0; x < xQanak; x++) {
        matrix[y][x] = Math.floor(Math.random() * 6);

    }
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var ut = new Utox(x, y, 2);
            utich.push(ut);
        }
        else if (matrix[y][x] == 3) {
            var gs = new Gisho(x, y, 3);
            gisho.push(gs);
        }
        else if (matrix[y][x] == 4) {
            var hovo = new Hov(x, y);
            hov.push(hovo);
        }
        else if (matrix[y][x] == 4) {
            var am = new Amen(x, y, 4);
            amen.push(am);
        }


    }
}

module.exports = matrix;