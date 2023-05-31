// a type depends on other type
type a1 = null;
type a2 = undefined;
type a3 = number;

type a = a1 extends string ? string : null; // if a1=string then a=string otherwise a=null

// multiple condition
type b = a1 extends null ? null : a2 extends undefined ? undefined : a3 extends number ? number : any;

type bookObj = {
    name: string;
    type: string;
    price: number;
    rating: number;
}

type checkProperty<T, K> = K extends keyof T ? true : false;

// "age" type er kono property "bookObj" namer object type er majhe ace ki na check korbe
type checkPrice = checkProperty<bookObj, 'age'>; // 'age' extends 'name' | 'type' | 'price' | 'rating'

type Properties = 'name' | 'type' | 'price' | 'rating';

// if K type property inside the properties then remove the property from the properties
type moveType<T, K> = T extends K ? never : T;

type useAblePro = moveType<Properties, 'name'>; // name is remove from Properties and set in useAblePro
type testAblePro = moveType<Properties, 'age'>; // age not inside Properties and set in useAblePro