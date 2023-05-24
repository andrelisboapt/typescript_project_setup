function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number){ //we can see this function is a "void" type, which means that it isn't returning anything
    console.log('Result: ' + num);
    
}

printResult(add(5, 12));

//let combineValues: Function //Function is also a variable type

let combineValues: (a: number, b: number) => number //here we make an arrow function where inside we define the function arguments and identifying the return type. The arguments "a" and "b" can be anything, they are just saying how many arguments to expect

combineValues = add;
//combineValues = printResult //printResult is a function that only receives 1 argument so it will give us and undefined if we just define combinedValues as a function without arrow function and arguments

console.log(combineValues(8, 8))

// let someValue: undefined; // here we see that in typescript we can also define a variable as a undefined however that's probably useless
