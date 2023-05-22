function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; //forcing conversion to number
    }
    else {
        result = input1.toString() + input2.toString();
    }
    /* if (resultConversion === 'as-number'){
        return +result; //here we are forcing the conversion to number
    } else {
        return result.toString(); //forcing result to string

    } */
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
