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

// Splitting and joining strings
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words); // → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". ")); // → Secretarybirds. specialize. in. stomping

// Repeating strings
console.log("LA".repeat(3)); // → LALALA

// Accessing string length and individual characters
let string = "abc";
console.log(string.length); // → 3
console.log(string[1]); // → b