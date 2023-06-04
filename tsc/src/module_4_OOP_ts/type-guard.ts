/*
    -> keyof guard
    -> in guard (object)
    -> instanceof guard ( guard class and objects)
*/

// <--- keyof guard --->
type AlphaNeumeric = string | number;

// function add2(param: string | number, param2: string | number): (string | number) {
function add2(param: AlphaNeumeric, param2: AlphaNeumeric): (AlphaNeumeric) {
    if (typeof param === "number" && typeof param2 === "number") {
        return param + param2
    } else {
        param = param.toString();
        param2 = param2.toString();
        return param + param2
    }
}

add2(2, 3);
add2('2', '3');


// <--- in guard --->
// its mainly used in object

type normalUser = {
    name: string
}

type adminUser = {
    name: string,
    role: "admin"
}

const normalUser1: normalUser = {
    name: 'i am normal',
};

const adminUser1: adminUser = {
    name: "i am admin",
    role: "admin"
}

function getUser(user: normalUser | adminUser): string {
    if ("role" in user) {
        return "i am admin"
    } else {
        return "i am not admin"
    }
}

// <--- instanceof guard --->
// its mainly used in object and class

class Animal3 {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
    makeSound(): string {
        return "i am an animal"
    }
}

class Dog2 extends Animal3 {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeBark() {
        return "i am barking";
    }
}

class Cat2 extends Animal3 {
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMeaw() {
        return "i am making meaw"
    }
}

// 1st approach start
// function getAnimal(obj: Animal3) {
//     if (obj instanceof Dog2) {
//         obj.makeBark();
//     }
//     else if (obj instanceof Cat2) {
//         obj.makeMeaw();
//     }
//     else {
//         obj.makeSound();
//     }
// }
// 1st approach end


// 2nd approach start
function isDog(animal: Animal3): animal is Dog2 {
    return animal instanceof Dog2
}

function isCat(animal: Animal3): animal is Cat2 {
    return animal instanceof Cat2
}

function getAnimal(obj: Animal3) {
    if (isDog(obj)) {
        obj.makeBark();
    }
    else if (isCat(obj)) {
        obj.makeMeaw();
    }
    else {
        obj.makeSound();
    }
}
// 2nd approach end


const animal1 = new Dog2("bool", "dog");
const animal2 = new Cat2("hulu", "cat");
