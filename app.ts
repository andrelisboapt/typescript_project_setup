function add(n1: number, n2: number) { //assigning a type to the parameters
    return n1 + n2;
}

const number1 = 5; //this really needs to be a number since we declared the parameters as numbers
const number2 = 2.8;

const result = add(number1, number2)

console.log(result)