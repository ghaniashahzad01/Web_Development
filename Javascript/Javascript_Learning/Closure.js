function createCounter() {
    let count = 0;  // Private variable

    return function () {
        count++;  // Increment count
        console.log("Current Count:", count);
    };
}

const counter1 = createCounter();  // Create a new counter instance
counter1(); // Output: Current Count: 1
counter1(); // Output: Current Count: 2

const counter2 = createCounter();  // Another counter instance
counter2(); // Output: Current Count: 1
