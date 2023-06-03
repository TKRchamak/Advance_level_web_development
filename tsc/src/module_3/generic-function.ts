const createArr = (param: string): string[] => {
    return [param];
}

function createArr1<T>(param: T): T[] {
    return [param];
}


const createArrWithGeneric = <T>(param: T): T[] => {
    return [param];
}

const createArrWithGeneric2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
}

type Name = { name: string }; // this is a alias

const result = createArrWithGeneric2<Name, boolean>({ name: "tonmoy" }, true);
console.log(result);



function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {
    const item = arr[index];
    return item[key];
}
const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];
console.log(getArrayItem(users, 0, 'name'))


// spread operator
const aaa = "aaa";
const obj4 = {
    ad: 'ad',
    cd: 'cd',
    kd: 'kd'
}
const newObj = { ...obj4, aaa }; // normal spread operator

const addInObj = <T, D>(obj: T, data: D) => { // typeScript spread operator
    return { ...obj, data };
}
const newObj2 = addInObj(obj4, aaa);


