/*

in generic type it does not check the type inner type.
Link,
If T is generic type , that take any thing(string/object/...)

if you want to specify the type than need to use constraint.

ex:
T extends {name: "sgw", age: "srgsr", username: "sdgs"} 

in this line Is pass any type against the T generic type that should have this property.
*/

const bbb = "aaa";
const obj5 = {
    name: "tonmoy",
    age: 23,
    username: "tkr",

}
const newObj1 = { ...obj5, bbb }; // normal spread operator

const addInObj2 = <T extends { name: string, age: number, username: string }, D>(obj: T, data: D) => { // in the T type content must have the Extends property
    return { ...obj, data };
}
const newObj3 = addInObj2(obj5, bbb);