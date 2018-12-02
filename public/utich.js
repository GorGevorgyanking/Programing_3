class Utox extends LivingCreature {
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
    getDirections(t) {
        this.newDirections();
        return super.getDirections(t);
    }
    move() {
        var emptyCord = this.getDirections(0);
        var g = random(emptyCord);
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
        var uteliq = this.getDirections(1);
        var kerac = random(uteliq);
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
                this.mul();
                this.energy = 5;
            }
        }
        else {
            this.move();
            this.energy--;
            if (this.energy == 0) {
                this.die();
            }
        }
    }
    mul() {

        var emptyg1 = this.getDirections(0);
        var g1 = random(emptyg1);
        if (g1) {
            var x = g1[0];
            var y = g1[1];
            var ut = new Utox(x, y, this.index);
            utich.push(ut);
            matrix[y][x] = 2;

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in utich) {
            if (this.x == utich[i].x && this.y == utich[i].y) {
                utich.splice(i, 1);
            }
        }
    }
}


