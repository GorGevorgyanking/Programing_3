

var xQanak = 50;
var yQanak = 50;
var matrix = [];
var side = 10;
var grassArr = [];
var utich = [];
var gisho = [];
var amen = [];
var hov = [];
function setup() {


    for (var y = 0; y < yQanak; y++) {
        matrix[y] = [];
        for (var x = 0; x < xQanak; x++) {
            matrix[y][x] = Math.round(random(4));

        }
    }


    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);

    background('gray');

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
                var am = new Amen(x, y, 4);
                amen.push(am);
            }
            else if (matrix[y][x] == 5) {
                var hov = new Hov(x, y, 4);
                hov.push(hov);
            }

        }
    }
}





function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('#01a3c8');
                rect(x * side, y * side, side, side);
            }

        }
    }
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




