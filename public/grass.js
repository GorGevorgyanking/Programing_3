class Grass extends LivingCreature {
    

    mul() {
        this.multiply++;
        var newCell = random(this.getDirections(0));

        if (this.multiply >= 1 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }

}



