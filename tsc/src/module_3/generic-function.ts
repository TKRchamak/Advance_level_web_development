const createArr = (param : string): string[] =>{
    return [param];
}

function createArr1<T>(param : T): T[]{
    return [param];
}


const createArrWithGeneric = <T>(param : T): T[] =>{
    return [param];
}

const createArrWithGeneric2 = <X, Y>(param1 : X, param2: Y): [X, Y] =>{
    return [param1, param2];
}

type Name = { name: string }; // this is a alias

const result = createArrWithGeneric2<Name, boolean>({name:"tonmoy"}, true);
console.log(result);



// spread operator
const aaa = "aaa";
const obj4 = {
    ad: 'ad',
    cd: 'cd',
    kd: 'kd'
}
const newObj = {...obj4, aaa}; // normal spread operator

const addInObj = <T, D>(obj:T, data: D) =>{ // typeScript spread operator
    return {...obj, data};
}
const newObj2 = addInObj(obj4, aaa);