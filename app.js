function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, callback) {
    var result = n1 + n2;
    callback(result);
}
printResult(add(5, 12));
//let combineValues: Function //Function is also a variable type
var combineValues; //here we make an arrow function where inside we define the function arguments and identifying the return type. The arguments "a" and "b" can be anything, they are just saying how many arguments to expect
combineValues = add;
//combineValues = printResult //printResult is a function that only receives 1 argument so it will give us and undefined if we just define combinedValues as a function without arrow function and arguments
console.log(combineValues(8, 8));
// let someValue: undefined; // here we see that in typescript we can also define a variable as a undefined however that's probably useless
addAndHandle(10, 20, function (result) {
    console.log(result); //Here we display the result from addAndHandle through the callback function
    //return result //we defined the callback as a void, however here we are dealing with the argument from the callback so we can return something
});
