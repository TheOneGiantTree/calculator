
let displayValue = "000";
let num1;
let num2;
let operator;

let display = document.getElementById('display');
display.textContent = displayValue;

const numButtons = document.querySelectorAll('button.num');
const operatorButtons = document.querySelectorAll('button.operator');
const nonNumButtons = document.querySelectorAll('button.nonNum');

numButtons.forEach(button => {
    button.addEventListener('click', updateDisplay);
});
operatorButtons.forEach(button => {
    button.addEventListener('click', updateOperator);
});
nonNumButtons.forEach(button => {
    button.addEventListener('click', nonNumFunction);
})

function nonNumFunction(event){
    const clickedButton = event.target;
    if( clickedButton.textContent === "clear") {
        reset();
    }
    if( clickedButton.textContent === "=") {
        operate();                      // YOU NEED TO ADD FUNCTION THAT UPDATES THE DISPLAY
    }                                   // AFTER DOING THE OPERATION ******
console.log(clickedButton.textContent)
}
function updateOperator(event){
    const clickedButton = event.target;
    if( clickedButton.textContent === '+' || 
        clickedButton.textContent === '-' || 
        clickedButton.textContent === '*' ||
        clickedButton.textContent === '/' ){
        operator = clickedButton.textContent;
        display.textContent = displayValue + ' ' + operator;

        operatorButtons.forEach(button => {
            button.disabled = true;
        })
    }console.log(operator)
}
function updateDisplay(event){
    const clickedButton = event.target;
    if(!operator){
        num1 = (num1 || "") + clickedButton.textContent;
        displayValue = num1
        display.textContent = displayValue;
    }
    else {
        num2 = (num2 || "") + clickedButton.textContent;
        display.textContent = displayValue + " " + operator + " " + num2;
    }
    console.log(num1, num2, operator)
}
function reset(){
    num1 = "";
    num2 = "";
    operator = "";
    display.textContent = "000";
}
function operate(operator, a, b){
    if(operator == "+"){
        return add(a, b)
    }
    if(operator == "-"){
        return subtract(a, b)
    }
    if(operator == "*"){
        return multiply(a, b)
    }
    if(operator == "/"){
        return divide(a, b)
    }
}
function add(a, b){
    return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a / b
}