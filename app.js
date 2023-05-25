var userInput; //we don't know if is a number or a string, but is more safe than "any" because we always have to check it
var userName;
userInput = 5;
userInput = 'Max';
//userName = userInput; //unknown give us an error and "any" not, because unknown is more restrictive, first we needed to check userInput type
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError('An error occurred!', 500);
console.log(result);
