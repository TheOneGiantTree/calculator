let displayValue = "0";
let num1;
let num2;
let operator;
let answer;

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

//
//PREVENT DOUBLE OPERATORS FROM BEING CLICKED
//ROUND ANSWERS TO 2 DECIMALS
//LIMIT DISPLAY AND NUM VARIABLES SO THEY DON'T RUN OFF THE SCREEN
// *******SET UP A FUNCTION THAT CHECKS IF THE CLICKED BUTTON IS AN OPERATOR AND IF IT IS DISABLE
// THE OPERATOR BUTTONS, AND IF IT'S NOT THEN MAKE ALL OPERATORS ENABLED.USE checkButtons() and
// toggleButtons()*******


function nonNumFunction(event){
    const clickedButton = event.target;
    if( clickedButton.textContent === "clear") {
        reset();
    }
    if( clickedButton.textContent === "=") {
        if( num1 && num2 && operator) {
            operate(operator, parseFloat(num1), parseFloat(num2));
        }     
        console.log(num1, num2, operator)              
    }                                  
console.log(clickedButton.textContent)
}
function updateOperator(event){
    const clickedButton = event.target;
    if(!num1) {
        num1 = '0'
    }
    if(operator) {
        operate(operator, parseFloat(num1), parseFloat(num2));
        operator = clickedButton.textContent;
    }
    else if(clickedButton.textContent === '+' || 
            clickedButton.textContent === '-' || 
            clickedButton.textContent === '*' ||
            clickedButton.textContent === '/' ){
        operator = clickedButton.textContent;
    }
    toggleButtons(operatorButtons);
    display.textContent = displayValue + ' ' + operator;
    console.log("num1=",num1, "num2=",num2, "op=",operator, "dv=",displayValue)
}
function operatorCheck(clickedButton) {
    if(Array.from(operatorButtons).includes(clickedButton)) {
        toggleButtons(operatorButtons);
    }
    console.log('check ran');
}
function toggleButtons(buttonArray) {
    Array.from(buttonArray).forEach(button => {
        button.disabled = !button.disabled
        
    })
}
function checkButtons(buttonArray) {
    for (let i = 0; i < buttonArray.length; i++) {
        if(buttonArray[i].disabled) {
            return true;
        }
        return false;
    }
}
function updateDisplay(event){
    const clickedButton = event.target;
    if(!operator){
        num1 = (num1 || "") + clickedButton.textContent;
        displayValue = num1
    }
    else {
        num2 = (num2 || "") + clickedButton.textContent;
        displayValue = num1 + " " + operator + " " + num2;
    }
    if(checkButtons(operatorButtons)) {
        toggleButtons(operatorButtons);
        console.log('ran')
    }
    display.textContent = displayValue;
    console.log("num1=",num1, "num2=",num2, "op=",operator, "dv=",displayValue)
}
function reset(){
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "0";
    console.log(num1, num2, operator)
    display.textContent = displayValue;
    if(checkButtons(numButtons)) {
        toggleButtons(numButtons);
        toggleButtons(operatorButtons);
    }
}
function operate(op, a, b){
    if(op == "+"){
        displayValue = add(a, b);
        num1 = displayValue;
        num2 = ""; 
        operator = "";
    }
    if(op == "-"){
        displayValue = subtract(a, b);
        num1 = displayValue;
        num2 = "";
        operator = "";
    }
    if(op == "*"){
        displayValue = multiply(a, b);
        num1 = displayValue;
        num2 = "";
        operator = "";
    }
    if(op == "/"){
        displayValue = divide(a, b);
        num1 = displayValue;
        num2 = "";
        operator = "";
    }
    display.textContent = num1;
    console.log(displayValue, answer)
}
function add(a, b){
   answer = a + b; 
   return answer
}
function subtract(a, b){
    answer = a - b;
    return answer
}
function multiply(a, b){
    answer = a * b;
    return answer
}
function divide(a, b){
    answer = a / b;
    if(b == "0") {
        toggleButtons(numButtons);
        toggleButtons(operatorButtons);
        return display.textContent = "Can't divide by 0";
    }
    return answer;
}