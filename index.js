//Display the numbers on the calculator
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

//Evaluate the calculations of the calculator using 'eval' function
function calculateResult() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}

//Set display to clear
function clearDisplay() {
    document.getElementById('display').value = '';
}

//To be defined
function prefixCalc() {
    alert('Prefix calculation function not defined yet.');
}

//To be defined
function postfixCalc() {
    alert('Postfix calculation function not defined yet.');
}