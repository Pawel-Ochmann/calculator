//variables

let number1 = null;
let number2 = null;
let actualOperator = null;

let display = document.querySelector('.display');

const numbers = document.querySelectorAll('.number');
const asideButtons = document.querySelectorAll('.aside_button')

const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');

const equal = document.querySelector('#equal');

//event-listeners
numbers.forEach((number)=> {
    number.addEventListener('click',displayContent)
});
asideButtons.forEach((button)=> {
    button.addEventListener('click',displayOperator);

});

clear.addEventListener('click', clearUp)

equal.addEventListener('click', setUpOperate);

const buttons = document.querySelectorAll('button');

buttons.forEach((button)=> {
    button.addEventListener('mousedown', ()=> {
        button.classList.add('focus');
    })
    button.addEventListener('mouseup', ()=> {
        button.classList.remove('focus');
    })
})



//functions
function operate(op,nr1,nr2) {
    const operators = [add,subtract,multiply,divide];
    let operationProduct =  operators[op](nr1,nr2).toFixed(10);
    clearUp()
    display.textContent = operationProduct;
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
    if (b===0) { return 'Do NOT divide by "0"!'}
    else return a/b;
}


function displayContent() {
    display.textContent += this.textContent;
};
function displayOperator() {
    setUpOperate()
    number1 = +display.textContent;
    if (!number1) return
    display.textContent += ` ${this.textContent} `;
    actualOperator = +this.dataset.op;
}

function setUpOperate() {
    const displaySecond = display.textContent.split(' ');
    number2 = +displaySecond[2];
    if (!number2 && number2!==0) return
    operate(actualOperator,number1,number2)
}

function clearUp() {
    display.textContent = '';
    number1 = null;
    number2 = null;
    actualOperator = null;
}
