/*
=> keyof use for get property name from a object
=> in ts when get a value from a object that must say the generic type in available in the given object

*/

type personType = {
    name: string,
    age: number,
    address: string;
}

const personObj: personType = {
    name: 'Tonmoy',
    age: 26,
    address: 'sindurmoti, lalmonirhur'
}

type personTypes = 'name' | 'age' | 'address'; // manually korci
type personTypesUsingKeyof = keyof personType; // same jinis keyof dia kora hoyece


// X er vitore j property gulo thakbe er modhe j kono akta value X hisebe dite hobe
function getPropertyValue<personType, Y extends keyof personType>(obj: personType, key: Y) {  // Y extends keyof personType
    console.log(obj[key]);
}

getPropertyValue(personObj, 'name');