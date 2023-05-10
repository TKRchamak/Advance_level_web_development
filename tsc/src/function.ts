/*
==> function
==> arrow function
==> default parameter
==> spread operator
==> method in object
==> rest parameter

*/

// --- function ---
function add(num1:number, num2:number):number {
    let sum = num1+ num2;
    return sum;
}


// --- arrow function ---
const addArrow = (num1: number, num2:number) : number => num1+num2;

const arr = [1,3,5,6];
const newArr = arr.map((item:number):number => item*item);
console.log(newArr);


// --- default parameter --- 
// ==> default parameter start from last parameter like example
const sum = (num1: number, num2:number=10): number =>{
    return num1+num2;
}
sum(10);


// --- method ---
const objq :{
    name: string;
    age: number;
    occupation: string;
    balance: number;
    addMoney(money:number):string;
    getMoney(): void
} ={
    name: 'Tonmoy',
    age: 27,
    occupation: 'developer',
    balance: 20,
    addMoney(money1: number): string{
        this.balance += money;
        return `This my new money ${this.balance+money1}`
    },
    getMoney():void{
        console.log(`This is my money : ${this.balance}`);
    }
}

// spread operator
//  ==> 
const myFriends = ["taki","shanto", "monir", "rafsan"];
const myNewFriend = ['notun', 'new', 'mamun'];

myFriends.push(...myNewFriend);
console.log(myFriends);

const [bestFriend] = myFriends;
console.log(bestFriend);

const myBestFriend ={
    fullName : "Tonmoy Kumar Roy",
    age: 20
};

const {fullName} = myBestFriend;
const {fullName : string} = myBestFriend; //alias hisebe nibe, type hisebe nibe na 
console.log({string});


// --- rest parameter 
//  ===> its like spread operator but working on reverse.
const greedFriend = (...friends:string[]):void => console.log(friends);
greedFriend('d', 'g', 'd', 's', 'r');
