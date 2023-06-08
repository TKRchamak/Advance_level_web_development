interface Model<IData, IMethod> {
    data: IData;
    method: IMethod;
}

interface IUserNew {
    firstName: string;
    lastName: string;
}

interface IMethod {
    fullName(): string
}

type MyClassModel = Model<IUserNew, IMethod>;

class User5 implements MyClassModel {
    data: IUserNew;
    method: IMethod

    constructor(firstName: string, lastName: string) {
        this.data = { firstName, lastName };
        this.method = {
            fullName: () => `${firstName} ${lastName}`
        }
    }
}

const me = new User5('Tonmoy', "Kumar Roy");

console.log(me.method.fullName());


export default User5;

