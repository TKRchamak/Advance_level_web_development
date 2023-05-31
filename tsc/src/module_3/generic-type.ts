const rollNUmber: number[] = [0, 1, 2, 3, 4];
const charList: string[] = ['q', 'w', 'e', 'r', 't'];

const rollNUmber2: Array<number> = [1, 2, 3, 4, 5, 6];
const charList2: Array<string> = ['1', '2', '3', '4', '5', '6'];


// generic array
type GenericArray<T> = Array<T>; // T is the parameter

const rollNUmber3: GenericArray<number> = [1, 2, 3, 4, 5, 6];
const charList3: GenericArray<string> = ['1', '2', '3', '4', '5', '6'];
console.log(charList3);

type GenericTuple<X, Y> = [X, Y];
const tupleData: GenericTuple<object, number> = [ //but the object is any type of object
    {
        name: 'Tonomt',
        age: 28
    },
    1
]


type customObject = {
    name: string,
    age: number,
    email: string,
    phoneNumber: string,
    address?: string
};
const tupleData2: GenericTuple<customObject, number> = [ //but the object is any type of object
    {
        name: 'Tonomt',
        age: 23,
        email: "tonsdfkjs",
        phoneNumber: '32482390'
    },
    1
]