/*

*/ 

// --- nullable ---
const searchName = (text: string | null) => {
    if(text === null){
        console.log("nothing to search");
    }else{
        console.log("searching...");
    }
}

// --- unknown ---

const getSpeed = (speed: string) =>{
    if(typeof speed === "number"){
        let convertMeter = (speed * 1000)/ 3600;
        console.log(convertMeter);
    }
    if(typeof speed === "string"){
        let [val, unit] = speed.split(' ');
        let convertMeter = (parseFloat(val) * 1000)/ 3600;
        console.log(convertMeter);
    }else{
        console.log('this is wrong type');
    }
}

// --- never --- // kokhonoi kono kichu return korbe na

// const throwError = (text:string) : never =>{
//     throw new Error(text)
// }

// throwError('error hoice');