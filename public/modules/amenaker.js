 Utox = require("./utich");
module.exports = class Amen extends Utox {

    chooseCell(character) {
        this.newDirections();
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
    chooseCell2(ind, ind1, ind2) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ind || matrix[y][x] == ind || matrix[y][x] == ind) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    move() {
        var emptyCord = this.chooseCell(0);
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

    eat() {
        var uteliq = this.chooseCell2(1, 2, 3);
        var kerac =Math.floor(Math.random()*(uteliq));


        if (kerac) {
            var x = kerac[0];
            var y = kerac[1];
            if (matrix[y][x] == 2) {
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 4;
                this.x = x;
                this.y = y;
                for (var i in utich) {
                    if (x == utich[i].x && y == utich[i].y) {
                        utich.splice(i, 1);
                    }
                }
                this.energy += 5;
            }

            else if (matrix[y][x] == 3) {
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 4;
                this.x = x;
                this.y = y;
                for (var i in gisho) {
                    if (x == gisho[i].x && y == gisho[i].y) {
                        gisho.splice(i, 1);
                    }
                }
                this.energy += 10;
            }

            else if (matrix[y][x] == 1) {
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 4;
                this.x = x;
                this.y = y;
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
                this.energy++;
            }

            if (this.energy >= 50) {
                this.mul();
                this.energy = 5;
            }


        }


        else {
            this.move();
            this.energy--;
            if (this.energy = 0) {
                this.die();
            }
        }


    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in amen) {
            if (this.x == amen[i].x && this.y == amen[i].y) {
                amen.splice(i, 1);
            }
        }


    }






    mul() {
        var emptyg1 = this.getDirections(0);

        var g1 = random(emptyg1);
        if (g1) {
            var x = g1[0];
            var y = g1[1];

            var am = new Amen(x, y, this.index);
            amen.push(am);

            matrix[y][x] = 4;





        }


    }


}

