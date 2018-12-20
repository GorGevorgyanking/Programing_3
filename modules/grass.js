function random(arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

var LivingCreature = require("./livingcreature");

module.exports = class Grass extends LivingCreature {

    mul(objects) {
        this.multiply++;
        var newCell = random(this.chooseCell(0, objects.matrix));
       // console.log(newCell);
        if (this.multiply >= 1 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            objects.grassArr.push(newGrass);
            objects.matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}
