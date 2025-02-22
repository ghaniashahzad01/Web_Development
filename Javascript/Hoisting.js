// ❌ Hoisting with var (Only Declaration is Hoisted)
console.log(myVar); // Output: undefined
var myVar = "Hello, Hoisting!";
console.log(myVar); // Output: Hello, Hoisting!

// ❌ Hoisting with let (Temporal Dead Zone)
try {
    console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
} catch (error) {
    console.log(error.message);
}
let myLet = "This is let!";

// ❌ Hoisting with const (Temporal Dead Zone)
try {
    console.log(myConst); // ❌ ReferenceError
} catch (error) {
    console.log(error.message);
}
const myConst = "This is const!";

// ✅ Hoisting with Function Declaration (Full Function is Hoisted)
greet(); // Output: Hello, World!
function greet() {
    console.log("Hello, World!");
}

// ❌ Hoisting with Function Expression (Only Variable is Hoisted, Not Function)
try {
    greetExpression(); // ❌ TypeError: greetExpression is not a function
} catch (error) {
    console.log(error.message);
}
var greetExpression = function () {
    console.log("This is a function expression!");
};
greetExpression(); // Output: This is a function expression!

// ❌ Hoisting with Arrow Function (Only Variable is Hoisted, Not Function)
try {
    arrowFunc(); // ❌ TypeError: arrowFunc is not a function
} catch (error) {
    console.log(error.message);
}
var arrowFunc = () => console.log("Arrow function is hoisted as a variable!");
arrowFunc(); // Output: Arrow function is hoisted as a variable!

// ✅ Correct Usage (Avoiding Hoisting Issues)
let safeLet = "Declared before use!";
console.log(safeLet); // Output: Declared before use!
