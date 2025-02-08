// Demonstrating string properties and methods

let kim = "Kim";
kim.age = 88;
console.log(kim.age); // → undefined (Strings are immutable and do not store new properties)

// Using built-in string methods
console.log("coconuts".slice(4, 7)); // → nut
console.log("coconut".indexOf("u")); // → 5
console.log("one two three".indexOf("ee")); // → 11

// Removing whitespace using trim()
console.log(" okay \n ".trim()); // → okay

// Padding numbers using padStart()
console.log(String(6).padStart(3, "0")); // → 006

