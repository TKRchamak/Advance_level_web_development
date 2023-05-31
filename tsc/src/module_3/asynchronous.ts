/*
--> string
--> boolean
--> array
--> interface
--> object
--> type alias
*/


// mocking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "fetched data";
        if (data) resolve(data);
        else reject('data not found');
    })
}

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if (data) resolve(data);
        else reject('data not found');
    })
}


type myObjectType = {
    username: string,
    userBalance: number
}
const makePromiseObj = (): Promise<myObjectType> => {
    return new Promise<myObjectType>((resolve, reject) => {
        const data: myObjectType = {
            username: 'Tonmoy',
            userBalance: 20
        };
        if (data) resolve(data);
        else reject('data not found');
    })
}


// get process
const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data;
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}

const getPromiseDataObj = async (): Promise<myObjectType> => {
    const data = await makePromiseObj();
    return data;
}




//---- practice ----
interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const makeTodoPromise = async (): Promise<ITodo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await res.json();
}

const getTodo = async (): Promise<void> => {
    const data = await makeTodoPromise();
    console.log(data);
}

getTodo();