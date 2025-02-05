let journal = [
    { events: ["work", "touched tree", "pizza"], squirrel: false },
    { events: ["work", "ice cream", "cauliflower"], squirrel: false },
    { events: ["weekend", "cycling", "peanuts"], squirrel: true }
  ];
  
// Accessing and modifying journal entries
console.log(journal[0].squirrel);  // false
journal[0].wolf = false;           // Adding a new property
delete journal[0].wolf;            // Removing a property

// Checking properties
console.log("squirrel" in journal[0]);  // true

// Copying properties with Object.assign()
Object.assign(journal[1], { mood: "happy" });
console.log(journal[1]);

// Adding a new entry
journal.push({ events: ["work", "dinner"], squirrel: true });

console.log(journal);
  