/*
==> interface dose not use in primitive data type, use alias
==> interface use with object type // function, class, object, array -- all are one kind of object in js
*/

type User = {
    name: string;
    age: number;
}

interface IUser {
    name: string;
    age: number;
}

type ExtendUserByType = User &{
    address: string;
}

interface ExtendUserByInterface extends IUser{
    address: string;
}


// --- interface with function ---
// alas
type AddFunc = (num1: number, num2:number) => number; // more recommended

const sumTwo: AddFunc = (num1, num2) =>  num1 + num2;

//interface
interface IAddFunc {
    (num1:number, num2:number): number;
}
const sumTwoNumber: IAddFunc = (num1, num2) =>  num1 + num2;


// --- interface with array ---
//alias 
type NumberArr = number[]; // more recommended
const numberList : NumberArr = [1, 2, 3, 4, 5];

//interface
interface INumberArr {
    [index:number]:number;
}
const numberList2 : INumberArr = [1, 2, 3, 4, 5];

