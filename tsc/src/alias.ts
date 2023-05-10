/*
same type er object er property er type bar bar repeat na korar jonno custom type use kora hoy
r atai hocce ALIAS type
*/

// --- alias with object
type MyObj = {
    name: String;
    age?: Number;
    address: String;
}

const obj1: MyObj = {
    name: 'supu',
    address: 'hatirpul, vuter goli',
}

const obj3: MyObj = {
    name: 'supu',
    age: 22,
    address: 'hatirpul, vuter goli',
}


// --- alias with boolean
type CustomFalse = boolean;
const isFalse: CustomFalse = false;


// --- alias with string
type customStrType = string;
const str: customStrType = 'this is custom string';


// --- alias with function
const calculator = ( 
    number1:number, 
    number2:number, 
    operator:(x:number, y:number)=> number // without alias 
    )=>{
    return operator(number1,number2);
}

type OperationType = (x:number, y:number)=> number;
const calculator2 = ( 
    number1:number, 
    number2:number, 
    operator:OperationType // with alias 
    )=>{
    return operator(number1,number2);
}

calculator(4,5, (x, y)=> x + y);
calculator(4,5, (x, y)=> x - y);
calculator(4,5, (x, y)=> x * y);