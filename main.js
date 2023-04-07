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
const dot = document.querySelector("#dot")

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

backspace.addEventListener('click', stepBack);
dot.addEventListener('click',useDots);

//functions
function operate(op,nr1,nr2) {
    const operators = [add,subtract,multiply,divide];
    let operationProduct =  operators[op](nr1,nr2);
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
    if (b===0) return 'Do NOT divide by 0!'
    else return a/b;
}


function displayContent() {
    display.textContent += this.textContent;
};
function displayOperator() {
    setUpOperate()

    if(this.textContent ==='-') {
        let second = display.textContent.split(' ')
        console.log(second)
        if(!display.textContent) {
            display.textContent += this.textContent;
        }
        if (second[2] === "" && actualOperator!==null) {
            display.textContent += this.textContent;
        }
    }

    number1 = +display.textContent;
    if (!number1) return
    display.textContent += ` ${this.textContent} `;
    actualOperator = +this.dataset.op;
}

function setUpOperate() {
    const displaySecond = display.textContent.split(' ');
    if (!displaySecond[2] && displaySecond[2]!== 0) return 
    number2 = +displaySecond[2];
    operate(actualOperator,number1,number2)
}

function clearUp() {
    display.textContent = '';
    number1 = null;
    number2 = null;
    actualOperator = null;
}

function stepBack() {
    let content = display.textContent;
    if (!content || content[content.length-1]===" ") return
    else content = content.slice(0,-1);
    display.textContent = content;
};

function useDots() {
    let actualNumber = display.textContent.split(' ');
    actualNumber = actualNumber[actualNumber.length-1];
    console.log(actualNumber)
    if (actualNumber.includes('.')) return
    else display.textContent += this.textContent;
}

