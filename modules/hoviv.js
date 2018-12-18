var Utox = require("./utich");
module.exports = class Hov extends Utox {

   
    chooseCell(character,matrix) {
        this.newDirections(matrix);
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move(matrix) {
        var emptyCord = this.chooseCell(0,matrix);
        var g = Math.floor(Math.random()*(emptyCord));
        if (g) {
            var x = g[0];
            var y = g[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
        }
    }

    eat(matrix) {
        var uteliq = this.chooseCell(3,4,matrix);
        var kerac = Math.floor(Math.random()*(uteliq));


        if (kerac) {
            var x = kerac[0];
            var y = kerac[1];
            if (matrix[y][x] == 3) {
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 4;
                this.x = x;
                this.y = y;
                for (var i in gisho) {
                    if (x == gisho[i].x && y == gisho[i].y) {
                        gisho.splice(i, 1);
                    }
                }

            }
        }

        else if (matrix[y][x] == 4) {
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 4;
            this.x = x;
            this.y = y;
            for (var i in amen) {
                if (x == amen[i].x && y == amen[i].y) {
                    amen.splice(i, 1);
                }
            }
        }
        else {
            this.move(matrix);
        }
    }











}

