Utox = require("./utich");
module.exports = class Gisho extends Utox {

    getDirections(t) {
        this.newDirections();
        return super.getDirections(t);
    }
    move() {
        var emptyCord = this.getDirections(1);

        var g = Math.floor(Math.random()*(emptyCord));

        if (g) {
            var x = g[0];
            var y = g[1];
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
        }
    }

    eat() {
        var uteliq = this.getDirections(2);
        var kerac = Math.floor(Math.random()*(uteliq));
        if (kerac) {


            var x = kerac[0];
            var y = kerac[1];

            matrix[this.y][this.x] = 0;
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
            for (var i in utich) {
                if (x == utich[i].x && y == utich[i].y) {
                    utich.splice(i, 1);
                }
            }
            this.energy++;
            if (this.energy >= 15) {
                this.mul();
                this.energy = 5;
            }


        }


        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }

    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gisho) {
            if (this.x == gisho[i].x && this.y == gisho[i].y) {
                gisho.splice(i, 1);
            }
        }


    }
    mul() {
        var emptyg1 = this.getDirections(0);

        var g1 = random(emptyg1);
        if (g1) {
            var x = g1[0];
            var y = g1[1];

            var gs = new Gisho(x, y, this.index);
            gisho.push(gs);

            matrix[y][x] = 3;
        }
    }
}
