function add(n1: number, n2: number, showResult: boolean, phrase: string) { //assigning a type to the parameters, typescript uses these "static types", javascript is more like "dynamic types"
    
    const result = n1 + n2; //here does a math operation
    if(showResult){
        console.log(phrase + result); //here returns a string and thats why we can't write phrase + n1 + n2
    }else{
    return result;
    }
}




const number1 = 5; //this really needs to be a number since we declared the parameters as numbers
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '

add(number1, number2, printResult, resultPhrase)
