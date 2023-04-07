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
    if(operationProduct.toString().length>10) {
        operationProduct = operationProduct.toFixed(10);
    }
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
        if(!display.textContent) {
            display.textContent += this.textContent;
        }
        if (second[2] === "" && actualOperator!==null) {
            display.textContent += this.textContent;
        }
    }
      
    setUpNumber1()
   
    if (!number1) return
    
    if(display.textContent.split(' ').length<2) {
    display.textContent += ` ${this.textContent} `;
    actualOperator = +this.dataset.op;}
}

function setUpOperate() {
    const displaySecond = display.textContent.split(' ');
    if (!displaySecond[2] && displaySecond[2]!== 0) return 
    if(isNaN(displaySecond[2])) return;
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

function setUpNumber1() {
    // if (isNaN(+display.textContent)) {
    if (display.textContent.split(' ').length<2) {
        number1 = +display.textContent;
    }
    else if(isNaN(+display.textContent)) {
        number1 = +display.textContent.split(' ')[0]
     }
    else  {
        number1 = +display.textContent;
    }
  }

  // keyboard support 

  window.addEventListener('keydown', (e)=> {
    let element = document.querySelector(`[data-key="${e.key}"]`);

    if(!element) return;

    else if(element.classList.contains('number')) {
    element.dispatchEvent(new Event('click', displayContent))
    }
    else if(element.classList.contains('aside_button')) {
        element.dispatchEvent(new Event('click', displayOperator))
    }
    else if(e.key='.') {
        element.dispatchEvent(new Event('click', useDots))
    }
    else if (e.key='Backspace') {
        element.dispatchEvent(new Event('click', stepBack))
    }
    else if (e.key='=') {
        element.dispatchEvent(new Event('click', setUpOperate))
    }
    else if (e.key='Delete') {
        element.dispatchEvent(new Event('click', clearUp))
    }
  })