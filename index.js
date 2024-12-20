//Display the numbers on the calculator
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display
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
    
    // Split the input into an array, that accepts spaces
    // Reverse the input for prefix evaluation so that we can pop from the end (working from left to right)
    const character = input.split(/\s+/).reverse(); 
    
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
                    if (operand2 === 0) {
                        document.getElementById('display').value = "Error: Division by zero."; //Cannot divide by 0
                        return;
                    }
                    result = operand1 / operand2;
                    break;
                default:
                    throw new Error("Invalid");
            }
            // Push the result back into the stack
            stack.push(result);
        }
    }
    
    //Error handling for if the user has entered the wrong pattern, as the result should be the last element in the stack
    if (stack.length !== 1) {
        document.getElementById('display').value = "Error: Invalid expression.";
        return;
    }

    // The final result is the last element in the stack
    const finalResult = stack.pop();
    // Display the result
    document.getElementById('display').value = finalResult;
}


function postfixCalc() {
    const input = document.getElementById('display').value;
    const stack = [];
    
    // Split the input into an array that accepts spaces
    // We don't reverse here so that we can pop from left to right
    const character = input.split(/\s+/);
    
    for (let char of character) {
        if (!isNaN(char)) {
            stack.push(parseInt(char)); //if char is a number, push it into the stack by parsing the string into an integer
        } else {
            // The item in the array is an operator, so we pop 2 integers from the stack to do the operation on them
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            
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
                    if (operand2 === 0) {
                        document.getElementById('display').value = "Error: Division by zero."; //cannot divide by 0
                        return;
                    }
                    result = operand1 / operand2;
                    break;
                default:
                    throw new Error("Unknown operator: " + token);
            }
            // Push the result back Into the stack
            stack.push(result);
        }
    }

      //Error handling for if the user has entered the wrong pattern
      if (stack.length !== 1) {
        document.getElementById('display').value = "Error: Invalid expression.";
        return;
    }
    
    // The final result is the last element in the stack
    const finalResult = stack.pop();
    // Display the result
    document.getElementById('display').value = finalResult;
}