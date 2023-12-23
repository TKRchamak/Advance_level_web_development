class Person {
    name: string;
    occupation: string;
    age: number;
    private _address: string;

    constructor(name: string, occupation: string, age: number, address: string) {
        this.name = name;
        this.occupation = occupation;
        this._address = address;
        this.age = age;
    }

    makeSleep(time: string): string {
        return `${this.name} sleep at ${time}`;
    }

    getAddress() {
        console.log(this._address);
    }
}


class Student extends Person {
    constructor(name: string, occupation: string, age: number, address: string) {
        super(name, occupation, age, address)
    }
}

class Teacher extends Person {
    designation: string;

    constructor(name: string, occupation: string, age: number, address: string, designation: string) {
        super(name, occupation, age, address);
        this.designation = designation;
    }
    takeClass(className: string): string {
        return `Teacher ${this.name} is taken the ${className} class`;
    }
}

let student1 = new Student('Tonmoy', 'student', 26, 'Dhaka');

console.log(student1);
