
/*
var socket;
function main() {
    socket = io.connect('http://localhost:3000');
    socket.on('matrix', function (k) {
       matrix=matrix;
    });
    
}
*/

var side = 10;
var socket;

var matrix = [];

function setup() {
    socket = io();
    frameRate(0);
    background('gray');

    socket.on("first matrix", function (mtx) {
        matrix = mtx;
        
        createCanvas(matrix[0].length * side, matrix.length * side);

        socket.on("refresh", function(mtx){
            matrix=mtx;
            redraw();
        });

        /////HETO JNJEL
    });

    noLoop();
}

function draw() {
    console.log(matrix);
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
            /*
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
*/
        }
       }
    }
