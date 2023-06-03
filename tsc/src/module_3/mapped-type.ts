type areaNumber = {
    height: number,
    width: number,
}

type readOnlyAreaString = {
    readonly height: string,
    readonly width: string,
}

type readOnlyAreaNumber = {
    readonly height: number,
    readonly width: number,
}

const rectangleArea1: areaNumber = {
    height: 10,
    width: 12
}

const rectangleArea2: readOnlyAreaNumber = {
    height: 10,
    width: 12
}

// in rectangleArea1, the height and width values are change able
rectangleArea1.height = 20;

// but
// in rectangleArea2, the height and width value not change able
// rectangleArea2.height = 20; //it gives error


// the upper 3 type are almost same, it can be dynamic by map
type Area = {
    // 1---> get the key, and set type number
    // [key in keyof areaNumber]: number 

    // 2---> get the key, and set type in the areaNumber have for this key
    // [key in keyof areaNumber]: areaNumber[key]
}

type GArea<T> = {
    [key in keyof T]: T[key]
}


type GAreaReadonly<T> = {
    readonly [key in keyof T]: T[key]
}
