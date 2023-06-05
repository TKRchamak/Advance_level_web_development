/*
    -> private variable name must have _ in start
    -> (get) getter -- kono private value k visit korar jonno getter use kora hoy
    -> (set) setter -- kono private value k update korar jonno setter use kora hoy
        -> setter k call kora jabe na variable er moto kore set korte hobe
*/

class MyBank {
    public id: number;
    public name: string;
    public age: number;
    private _balance: number;

    constructor(name: string, age: number, _balance: number, lastId: number) {
        this.id = lastId + 1;
        this.name = name;
        this.age = age;
        this._balance = _balance;
    }

    // getter
    get balance(): number {
        return this._balance
    }

    // setter
    set deposit(amount: number) {
        this._balance = this.balance + amount;
    }

    makeDeposit(amount: number): string {
        this._balance = this._balance + amount;
        return `Previous amount\t : ${this._balance - amount} \nDeposit amount\t : ${amount} \nCurrent amount\t : ${this._balance}`;
    }
}

const tonmoyAccount = new MyBank('Tonmoy', 28, 100, 0);

// let res = tonmoyAccount.makeDeposit(20);
// console.log(res);


console.log(tonmoyAccount.balance);
tonmoyAccount.deposit = 20; // setter k call kora jabe na variable er moto kore set korte hobe
console.log(tonmoyAccount.balance);


