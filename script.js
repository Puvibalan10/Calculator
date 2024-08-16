// script.js
let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += ' ' + operator + ' ';
}

function calculate() {
    try {
        display.value = eval(display.value); // Warning: eval can be dangerous if not used carefully
    } catch {
        display.value = 'Error';
    }
}
