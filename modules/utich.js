var LivingCreature = require("./livingcreature");
module.exports = class Utox extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 3;
        this.y1;
        this.x1;
        this.count = 0;
    }
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    getDirections(t, matrix) {
        this.newDirections();
        return super.getDirections(t, matrix );
    }

 
    move(matrix) {
        var emptyCord = this.getDirections(0, matrix);
        var g = Math.floor(Math.random() * (emptyCord));
        if (g) {
            var x = g[0];
            var y = g[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
        }
    }

    mul(matrix) {

        var emptyg1 = this.getDirections(0, matrix);
        var g1 = Math.floor(Math.random() * (emptyg1));
        if (g1) {
            var x = g1[0];
            var y = g1[1];
            var ut = new Utox(x, y, this.index);
            utich.push(ut);
            matrix[y][x] = 2;

        }
    }

    die(matrix,utich) {
        matrix[this.y][this.x] = 0;
        for (var i in utich) {
            if (this.x == utich[i].x && this.y == utich[i].y) {
                utich.splice(i, 1);
            }
        }
    }
    eat(matrix) {
        var uteliq = this.getDirections(1, matrix);
        var kerac = Math.floor(Math.random() * (uteliq));
        if (kerac) {
            var x = kerac[0];
            var y = kerac[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            this.energy++;

            if (this.energy >= 10) {
                this.mul(matrix);
                this.energy = 5;
            }
        }

        else {
            this.move(matrix);
            this.energy--;
            if (this.energy == 0) {
                this.die(matrix);
            }

        }

    }

}


