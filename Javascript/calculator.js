// Console-Based Calculator
console.log("Welcome to the Console Calculator!");

// Prompt for inputs
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const operation = prompt("Enter an operation (+, -, *, /): ");

// Perform calculation using conditionals
let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
} else {
    result = "Error: Invalid operation!";
}

// Log the result
console.log(`Result: ${result}`);
