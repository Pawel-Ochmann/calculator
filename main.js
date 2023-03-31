//variables

let number1 = 2;
let number2 = 4;
let operator =2;



//functions
function operate(op,nr1,nr2) {
    const operators = [add,subtract,multiply,divide];
    return operators[op](nr1,nr2)
}


function add(a,b) {
    return a+b;
};
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

console.log(operate(operator,number1,number2));