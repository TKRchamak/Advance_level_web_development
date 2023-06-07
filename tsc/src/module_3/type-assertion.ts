/*
==> assertion --> type scrip er theke besi bujhe amra j type dibo oi type nia kaj korbe.

    onek gulo type dea thakar poreo ami nije theke stric vabe bole dibo j ai type e nite hobe 

*/

let amni: any;
amni = "this is a string";

(amni as string).toLocaleLowerCase(); // set the type string
<string>amni.toLocaleLowerCase(); // this is the another way ,,, but it dose not work is tsx ,,,


function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The Converted result is : ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}

// const resultToNumber = kgToGram(1000); // normally that value type is string|number|undefined 
const resultToNumber = kgToGram(1000) as number; // after using the assertion that should be number

const resultToString = kgToGram("1000") as string;




// --- in type try catch ---
type customErrorType = {
    message: string;
}
try {

} catch (err) {
    console.log((err as customErrorType).message);
}
