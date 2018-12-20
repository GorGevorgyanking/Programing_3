function random(arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}



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
    chooseCell(t, objects) {
        this.newDirections();
        return super.chooseCell(t, objects );
    }

 
    move(objects) {
        var emptyCord = this.chooseCell(0, objects.matrix);
        var g =random(emptyCord);
        if (g) {
            var x = g[0];
            var y = g[1];
            objects.matrix[this.y][this.x] = 0;
            objects.matrix[y][x] = 2;
            this.x = x;
            this.y = y;
        }
    }

    mul(objects) {

        var emptyg1 = this.chooseCell(0, objects.matrix);
        var g1 = random(emptyg1);
        if (g1) {
            var x = g1[0];
            var y = g1[1];
            var ut = new Utox(x, y, this.index);
            objects.utich.push(ut);
            objects.matrix[y][x] = 2;

        }
    }

    die(objects) {
        objects.matrix[this.y][this.x] = 0;
        for (var i in objects.utich) {
            if (this.x == objects.utich[i].x && this.y == objects.utich[i].y) {
                objects.utich.splice(i, 1);
            }
        }
    }
    eat(objects) {
        var uteliq = this.chooseCell(1, objects.matrix);
        var kerac = random(uteliq);
        if (kerac) {
            var x = kerac[0];
            var y = kerac[1];
            objects.matrix[this.y][this.x] = 0;
            objects.matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            for (var i in objects.grassArr) {
                if (x == objects.grassArr[i].x && y == objects.grassArr[i].y) {
                    objects.grassArr.splice(i, 1);
                }
            }
            this.energy++;

            if (this.energy >= 10) {
                this.mul(objects);
                this.energy = 5;
            }
        }

        else {
            this.move(objects);
            this.energy--;
            if (this.energy == 0) {
                this.die(objects);
            }

        }

    }

}


