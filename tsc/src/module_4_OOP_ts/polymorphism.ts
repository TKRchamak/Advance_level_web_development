/*
    --> poly - onek gulo 
    --> morphy - roop
    --> polymorphism - onel gulo roop

    in parent class have a function and child class inherite the parent's class function
    but the child class have same function with different functionality
*/

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height;
    }
}

