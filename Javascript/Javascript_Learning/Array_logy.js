let todoList = [];

function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

// Demonstrating indexOf and lastIndexOf
let numbers = [1, 2, 3, 2, 1];
console.log(numbers.indexOf(2));      // → 1
console.log(numbers.lastIndexOf(2));  // → 3

// Demonstrating slice
let array = [0, 1, 2, 3, 4];
console.log(array.slice(2, 4));  // → [2, 3]
console.log(array.slice(2));     // → [2, 3, 4]

// Demonstrating concat
let letters = ["a", "b", "c"];
console.log(letters.concat(["d", "e"])); // → ["a", "b", "c", "d", "e"]
console.log(letters.concat("f"));        // → ["a", "b", "c", "f"]

// Function to remove an element at a given index
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2)); // → ["a", "b", "d", "e"]
