// Creating an object
let student = {
    firstName: "Ghania",
    lastName: "Shahzad",
    age: 22,
    greet: function() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  };
  
// Accessing object properties
console.log(student.firstName);  // Output: Ghania
console.log(student['age']);      // Output: 22

// Calling the method
console.log(student.greet());     // Output: Hello, my name is Ghania Shahzad.
