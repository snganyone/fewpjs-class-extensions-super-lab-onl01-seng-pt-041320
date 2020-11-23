// Write your classes here

class Tree{
    constructor(species){
        this.species = species;
    }

    static definition(){
        return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.';
    }
}

let tree = new Tree('apple');
console.log(tree.species);