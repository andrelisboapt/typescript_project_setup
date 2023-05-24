function add(n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number){ //we can see this function is a "void" type, which means that it isn't returning anything
    console.log('Result: ' + num);
    
}

printResult(add(5, 12));


// let someValue: undefined; // here we see that in typescript we can also define a variable as a undefined however that's probably useless
