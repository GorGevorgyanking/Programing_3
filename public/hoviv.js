class Hov {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.y1;
        this.x1;
        this.multiply = 0;


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
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    chooseCell(character) {
        this.getNewCoordinates();
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
        var uteliq = this.chooseCell(3);
        var uteliq2 = this.chooseCell(4);
        var axb = uteliq.concat(uteliq1.concat(uteliq2));
        var kerac = random(axb);


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

        else if (matrix[y][x] == 5) {
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
            this.move();


        }


    }











}

