/*
    in ts class not need to declare this variable just pass the parameter with properties like Animal2 class
*/

// normal ts class
class Animal {
    name: string; // public
    species: string; // public
    sound: string; // public

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() { // public
        console.log(`${this.name} is make ${this.sound} sound`);
    }
}


// using parameter properties ts class

class Animal2 {

    // parameter properties
    constructor(public name: string, public species: string, public sound: string) {
    }

    makeSound() {
        console.log(`${this.name} is make ${this.sound} sound`);
    }
}

const cat = new Animal('Hulu', 'cat', 'meaw meaw');
cat.makeSound();

const dog = new Animal2('Bool Dog', 'dog', 'Vow Vow');
dog.makeSound();