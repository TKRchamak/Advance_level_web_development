// /*
//     -> private variable name must have _ in start
// */

// class MyBank {
//     public id: number;
//     public name: string;
//     public age: number;
//     private _balance: number;

//     constructor(name: string, age: number, _balance: number, lastId: number) {
//         this.id = lastId + 1;
//         this.name = name;
//         this.age = age;
//         this._balance = _balance;
//     }

//     makeDeposit(amount: number): string {
//         this._balance = this._balance + amount;
//         return `Previous amount\t : ${this._balance - amount} \nDeposit amount\t : ${amount} \nCurrent amount\t : ${this._balance}`;
//     }
// }

// const tonmoyAccount = new MyBank('Tonmoy', 28, 100, 0);

// // let res = tonmoyAccount.makeDeposit(20);
// // console.log(res);
