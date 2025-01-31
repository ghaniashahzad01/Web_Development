// Introduction: Understanding NaN (Not a Number) in JavaScript

// What is NaN?
console.log(typeof NaN);  // Outputs: "number"

// Common Operations Resulting in NaN

// 1. Invalid Mathematical Operations
console.log(0 / 0);  // NaN: Division by zero results in NaN
console.log(Math.sqrt(-1));  // NaN: Taking the square root of a negative number results in NaN
console.log("hello" - 1);  // NaN: Subtraction of a string that is not numeric results in NaN

// 2. Parsing Non-Numeric Strings
console.log(parseInt("abc"));  // NaN: Parsing a non-numeric string as an integer results in NaN
console.log(parseFloat("xyz"));  // NaN: Parsing a non-numeric string as a float results in NaN

// Key Characteristics of NaN

// 1. NaN is not equal to NaN
console.log(NaN === NaN);  // false: NaN is not equal to itself
console.log(Object.is(NaN, NaN));  // true: Object.is() is the correct way to compare NaN

// 2. NaN is falsy
if (NaN) {
    console.log("This won't execute");
} else {
    console.log("NaN is falsy");  // This will execute because NaN is falsy
}

// Best Practices

// 1. Checking if a Value is NaN
let value = NaN;
console.log(Number.isNaN(value));  // true: Number.isNaN() correctly identifies NaN

let invalidNumber = "hello";
console.log(Number.isNaN(invalidNumber));  // false: "hello" is not NaN

// 2. Handling NaN in Calculations
let result = 0 / 0;
if (Number.isNaN(result)) {
    console.log("The result is NaN");  // This will execute
} else {
    console.log("The result is", result);
}

// 3. Returning NaN in Functions
function divide(a, b) {
    if (b === 0) {
        return NaN;  // Explicitly return NaN when division by zero
    }
    return a / b;
}
console.log(divide(5, 0));  // NaN: Dividing by zero returns NaN

// Common Pitfalls

// 1. NaN in Logical Operations
let valueNaN = NaN;
if (valueNaN) {
    console.log("This won't be printed");
} else {
    console.log("NaN is falsy in logical operations");  // This will execute because NaN is falsy
}

// 2. Comparison with NaN
let resultNaN = 0 / 0;
if (resultNaN === NaN) {
    console.log("This won't execute");
}

// Correct way to compare NaN
if (Object.is(resultNaN, NaN)) {
    console.log("NaN is correctly compared using Object.is()");  // This will execute
}
