// type likhe na dile infer kore type asign kore nay
const user1 = {
    name: 'Tonmoy',
    age: 20,
    isMarried: false,
    wife: 'Suparna Debnath'
};

// 
const user2:{
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string // optional type 
} = {
    name: 'Tonmoy',
    age: 20,
    isMarried: false,
    wife: 'Suparna Debnath'
};

//---Literal Types--- 
// if give a value in a property as a type that mean Literal Types.
const obj:{
    name: "Tonmoy", // Literal Types
    age: number,
    isMarried: boolean,
    wife?: string // optional type 
} = {
    name: 'Tonmoy',
    age: 20,
    isMarried: false,
    wife: 'Suparna Debnath'
};

// --- readonly ---
// if set readonly before any property that make not editable
const obj2:{
    readonly name: string, // readonly
    age: number,
    isMarried: boolean,
    wife?: string // optional type 
} ={
    name: 'Tonmoy',
    age: 20,
    isMarried: false,
    wife: 'Suparna Debnath'
}

// obj2.name = 'chamak' //this is not possible to edit its only for read