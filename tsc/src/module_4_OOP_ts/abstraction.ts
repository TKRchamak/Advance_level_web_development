/*
    --> parent class is base class
    --> child class is derived class


    abstract class dose not make any instance,
    it use like a model for child class,

    abs method are must be declare in inherit class or derived class or child class


    two way to create abstract class in ts
        -> interface 
        -> abstract class


    -> the difference between interface abstraction and abs class is in base class any non abs method
        that will be inherit in child class automatically but in interface if use optional chaining that can not.
*/

interface IVehicleClass {
    startEngine(): void;
    stopEngine(): void;
    move?(): void; // optional function, in can be use or not
}

class Vehicle implements IVehicleClass {
    constructor(
        public type: string,
        public model: string,
        public manufactureData: Date,
    ) { }
    startEngine() {
        console.log('engine is starting ...');
    }

    stopEngine() {
        console.log('engine stop');
    }
}


// abstract class
// this is a model class, it use to create all type of vehicle class, 
// and the class should be declare the abstract method in child class

abstract class Vehicle2 implements IVehicleClass {
    abstract type: string;
    abstract model: string;
    abstract manufactureData: Date;

    abstract startEngine(): void
    abstract stopEngine(): void

    move() { }
}

class Car extends Vehicle2 { // in this class move method inherit automatically
    type: string;
    model: string;
    manufactureData: Date;

    constructor(type: string, model: string, manufactureData: Date) {
        super()
        this.model = model;
        this.type = type;
        this.manufactureData = manufactureData;
    }


    startEngine(): void {
        console.log('object');
    }
    stopEngine(): void {
        console.log('done');
    }
}

