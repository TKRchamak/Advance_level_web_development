interface ICustomObj<E, P = null, A = null> { // set A by default null if don't give any type
    name: string,
    age: number,
    email: E,
    phoneNumber: P,
    address?: string
};

interface IGenericTpl<X, Y>{
    name: X,
    gf: Y
}

const tupleData4:IGenericTpl<string, ICustomObj<string, string>> = { // no type send for address
    name: 'Tonmoy',
    gf:{
        name: 'Suparna',
        age: 23,
        email: "tonsdfkjs",
        phoneNumber: '32482390'
    }
}

const tupleData5:IGenericTpl<string, ICustomObj<string, string, string>> = { 
    name: 'Tonmoy',
    gf:{
        name: 'Suparna',
        age: 23,
        email: "tonsdfkjs",
        phoneNumber: '32482390',
        address: "dhaka, bangladesh"
    }
}