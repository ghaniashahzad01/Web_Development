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