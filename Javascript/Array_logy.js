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

