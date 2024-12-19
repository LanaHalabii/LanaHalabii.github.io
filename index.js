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

function prefixCalc() {
    const input = document.getElementById('display').value;
    const stack = [];
    
    // Split the input into an array
    // Reverse the input for prefix evaluation so that we can pop from the end (working from left to right)
    const character = input.split('').reverse(); 
    
    for (let char of character) {
        if (!isNaN(char)) {
            stack.push(parseInt(char)); // If char is a number, push it to the stack by parsing the string into an integer
        } else {
            // The item in the array is an operator, so we pop 2 integers from the stack to do the operation on them
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            
            let result;
            switch (char) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                default:
                    throw new Error("Invalid");
            }
            // Push the result back onto the stack
            stack.push(result);
        }
    }
    
    // The final result is the last element in the stack
    const finalResult = stack.pop();
    // Display the result
    document.getElementById('display').value = finalResult;
}

//To be defined
function postfixCalc() {
    alert('Postfix calculation function not defined yet.');
}