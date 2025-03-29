const person = {
    name: "Ali",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Without bind - `this` is lost in setTimeout
setTimeout(person.greet, 1000); // ❌ undefined

// With bind - `this` is fixed
setTimeout(person.greet.bind(person), 1000); // ✅ "Hello, my name is Ali"
