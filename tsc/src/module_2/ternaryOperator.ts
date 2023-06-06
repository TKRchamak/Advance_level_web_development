/*
==> ternary operator
==> Nullish coalescing operator
    -> Nullish coalescing operator working against null and undefine value only;
*/


// <--- Nullish coalescing operator --->

const isAuth = "";
const userName = isAuth ?? "Guest"; // this is Nullish coalescing operator; if the isAuth value is null/undefine it return "Guest", otherwise return isAuth
const userName2 = isAuth ? isAuth : "Guest";
// console.log({ userName }, { userName2 });

type Manus = {
    name: string;
    age: number;
    address: {
        road: 'no road'; // this is literal type
        city: 'no city'; // this is literal type
        home?: "";
    }
}

const manus1: Manus = {
    name: 'Tonmoy',
    age: 26,
    address: {
        road: 'no road',
        city: 'no city'
    }
}

const manus1Home = manus1?.address?.home ?? "no home"; // in this case there have no value of home so that take the optional value


// function generateAdder(a: number): (b: number) => number { // [(b: number) => number] ----> this is inner function type
//     return function (b: number) {
//         return a + b;
//     };
// }

// const addTwo = generateAdder(2);
// console.log(addTwo(3));
// console.log(addTwo(5));