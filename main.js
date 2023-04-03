//variables

let number1 = 2;
let number2 = 4;
let actualOperator = '';

let display = document.querySelector('.display');

const numbers = document.querySelectorAll('.number');
const asideButtons = document.querySelectorAll('.aside_button')

//event-listeners
numbers.forEach((number)=> {
    number.addEventListener('click',displayContent)
});
asideButtons.forEach((button)=> {
    button.addEventListener('click',displayOperator);

});


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


function displayContent() {
    display.textContent += this.textContent;
};
function displayOperator() {
    if (actualOperator) return; 
    number1 = display.textContent;
    console.log(+number1);
    display.textContent += this.textContent;
    actualOperator = this.dataset.op;
}