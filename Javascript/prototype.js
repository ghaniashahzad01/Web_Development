// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method using prototype
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

// Creating objects
const person1 = new Person("Ali", 25);
const person2 = new Person("Ayesha", 22);

console.log(person1.greet()); // Hello, my name is Ali and I am 25 years old.
console.log(person2.greet()); // Hello, my name is Ayesha and I am 22 years old.
