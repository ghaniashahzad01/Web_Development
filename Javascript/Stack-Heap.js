// Stack Example
let number = 10; // Primitive value stored on the stack
let text = "Hello, Stack!"; // Primitive value stored on the stack

// Heap Example
let obj = {
    name: "John",
    age: 25
}; // Objects are stored on the heap, reference is stored on the stack

let array = [1, 2, 3, 4]; // Arrays are also stored on the heap

// Modifying stack data
let anotherNumber = number; // Copies the value of 'number'
anotherNumber = 20; // Modifying 'anotherNumber' does not affect 'number'


// Modifying heap data
let anotherObj = obj; // Reference is copied, not the actual object
anotherObj.name = "Jane"; // Changes the original object since they share the same reference
