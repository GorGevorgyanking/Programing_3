function random(arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}


var Utox = require("./utich");
module.exports = class Gisho extends Utox {

    chooseCell(t,objects) {
        this.newDirections();
        return super.chooseCell(t,objects );
    }
    
    move(objects) {
        
        var emptyCord = this.chooseCell(1, objects.matrix);
        var g =random(emptyCord);
        if (g) {
            var x = g[0];
            var y = g[1];
            objects.matrix[this.y][this.x] = 0;
            objects.matrix[y][x] = 3;
            this.x = x;
            this.y = y;
        }
    }
        

    die(objects) {
        objects.matrix[this.y][this.x] = 0;
        for (var i in objects.gisho) {
            if (this.x == objects.gisho[i].x && this.y == objects.gisho[i].y) {
                objects.gisho.splice(i, 1);
            }
        }


    }
    
   
    mul(objects) {
        var emptyg1 = this.chooseCell(0,objects.matrix);

        var g1 =  random(emptyg1);
        if (g1) {
            var x = g1[0];
            var y = g1[1];

            var gs = new Gisho(x, y, this.index);
            objects.gisho.push(gs);

           objects.matrix[y][x] = 3;
        }
    }
    
   
    eat(objects) {
        var uteliq = this.chooseCell(2,objects.matrix);
        var kerac = random(uteliq);
        if (kerac) {
            var x = kerac[0];
            var y = kerac[1];
            if (objects.matrix[y][x] == 2){
            objects.matrix[this.y][this.x] = 0;
            objects.matrix[y][x] = 3;
            this.x = x;
            this.y = y;
            for (var i in objects.utich) {
                if (x == objects.utich[i].x && y == objects.utich[i].y) {
                    objects.utich.splice(i, 1);
                }
            }
        }
        this.energy++;
            if (this.energy >= 15) {
                this.mul(objects);
                this.energy = 5;
            }


        


        else {
            this.move(objects);
            this.energy--;
            if (this.energy <= 0) {
                this.die(objects);
            }
        }

    }

   



        }

    }
