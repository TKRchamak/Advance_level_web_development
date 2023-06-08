// interface myObj {
//     name: string,
//     email: string,
//     number: string
// }

type myObj = {
    name: string,
    email?: string,
    number: string
}

// using index signature
// type myObj = {
//     [key: string]: string
// }



// <--- Pick --->
type name = Pick<myObj, "name">;
type credential = Pick<myObj, "name" | "email">;


// <--- Omit --->
// number chara baki sob property
type withoutNumber = Omit<myObj, "number">;


// <--- Partial --->
// make all properties optional
type partialObj = Partial<myObj>;


// <--- Required --->
// make all properties required
type allRequired = Required<myObj>


// <--- Readonly --->
type readonlyObj = Readonly<MyObj>


// <--- Record --->
// type myObj1 = {
//     'a': string,
//     'b': string,
//     'c': string
// }

// using index signature
// type myObj1 = {
//     [key: string]: string
// }

// using record
// type myObj1 = Record<string, string>

type myObj1 = Record<'a' | 'b' | 'c' | "d", string>

let obj7: myObj1 = {
    'a': 'nothing',
    'b': 'nothing',
    'c': 'nothing',
    'd': "nothing"
}