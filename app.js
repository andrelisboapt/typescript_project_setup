function add(n1, n2, showResult, phrase) {
    var result = n1 + n2; //here does a math operation
    if (showResult) {
        console.log(phrase + result); //here returns a string and thats why we can't write phrase + n1 + n2
    }
    else {
        return result;
    }
}
var number1 = 5; //this really needs to be a number since we declared the parameters as numbers
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
