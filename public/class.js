class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
    chooseCell(character) {
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
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));

        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}




/////////////////////////
class Utox {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.y1;
        this.x1;
        this.count = 0;
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


///////////////
class Gisho {
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
        var emptyCord = this.getDirections(1);

        var g = random(emptyCord);

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
        var kerac = random(uteliq);
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

//////////////////////////////////


class Amen {
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
        var uteliq = this.chooseCell2(1, 2, 3);
        var kerac = random(uteliq);


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






