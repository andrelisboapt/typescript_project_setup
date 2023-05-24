/* function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') { //this is a union types, which means that those inputs can be numbers or strings, so its more flexible and accurate */
    
    type Combinable = number | string // this is a type aliases (custom type), a reusable type, "Comninable" can be any name
    type ConversionDescriptor = 'as-number' | 'as-text'
    
function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; //forcing conversion to number
    } else {
        result = input1.toString() + input2.toString();
    }
    /* if (resultConversion === 'as-number'){
        return +result; //here we are forcing the conversion to number
    } else {
        return result.toString(); //forcing result to string

    } */
    
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);