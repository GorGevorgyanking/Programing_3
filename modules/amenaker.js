function random(arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

var Utox = require("./utich");
module.exports = class Amen extends Utox {

    chooseCell(character,matrix) {
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
    chooseCell2(ind, ind1, ind2,matrix) {
        this.newDirections(matrix);
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


    move(objects) {
        var emptyCord = this.chooseCell(0,objects.matrix);
        var g = random(emptyCord);
        if (g) {
            var x = g[0];
            var y = g[1];
            objects.matrix[this.y][this.x] = 0;
            objects.matrix[y][x] = 2;
            this.x = x;
            this.y = y;


        }
    }
    die(objects) {
        objects.matrix[this.y][this.x] = 0;
        for (var i in objects.amen) {
            if (this.x == objects.amen[i].x && this.y == objects.amen[i].y) {
                objects.amen.splice(i, 1);
            }
        }


    }






    mul(objects) {
        var emptyg1 = this.chooseCell(0,objects.matrix);

        var g1 =  random(emptyg1);
        if (g1) {
            var x = g1[0];
            var y = g1[1];

            var am = new Amen(x, y, this.index);
            objects.amen.push(am);

            objects.matrix[y][x] = 4;





        }


    }


    eat(objects) {
        var uteliq = this.chooseCell2(1, 2, 3,objects.matrix);
        var kerac =random(uteliq);


        if (kerac) {
            var x = kerac[0];
            var y = kerac[1];
            if (objects.matrix[y][x] == 2) {
                objects.matrix[this.y][this.x] = 0;
                objects.matrix[y][x] = 4;
                this.x = x;
                this.y = y;
                for (var i in objects.utich) {
                    if (x == objects.utich[i].x && y == objects.utich[i].y) {
                        objects.utich.splice(i, 1);
                    }
                }
                this.energy += 5;
            }

            else if (objects.matrix[y][x] == 3) {
                objects.matrix[this.y][this.x] = 0;
                objects.matrix[y][x] = 4;
                this.x = x;
                this.y = y;
                for (var i in objects.gisho) {
                    if (x == objects.gisho[i].x && y == vgisho[i].y) {
                        objects.gisho.splice(i, 1);
                    }
                }
                this.energy += 10;
            }

            else if (objects.matrix[y][x] == 1) {
                objects.matrix[this.y][this.x] = 0;
                objects.matrix[y][x] = 4;
                this.x = x;
                this.y = y;
                for (var i in objects.grassArr) {
                    if (x == objects.grassArr[i].x && y == objects.grassArr[i].y) {
                        objects.grassArr.splice(i, 1);
                    }
                }
                this.energy++;
            }

            if (this.energy >= 50) {
                this.mul(objects);
                this.energy = 5;
            }


        }


        else {
            this.move(objects);
            this.energy--;
            if (this.energy = 0) {
                this.die(objects);
            }
        }


    }

    

}

