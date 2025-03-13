// Another demonstration of Mutability in JavaScript Objects

let person1 = { name: "Alice", age: 25 };
let person2 = person1; // Both references point to the same object
let person3 = { name: "Alice", age: 25 }; // A separate object with the same properties

console.log(person1 === person2); // true, same object reference
console.log(person1 === person3); // false, different objects with same properties

// Modifying person1 affects person2
person1.age = 30;
console.log(person2.age); // 30
console.log(person3.age); // 25 (remains unchanged)

// Demonstrating const object mutation
const car = { brand: "Toyota", model: "Corolla" };
car.model = "Camry"; // Allowed, modifying object property
console.log(car); // { brand: "Toyota", model: "Camry" }

// car = { brand: "Honda", model: "Civic" }; // Not allowed, reassigning a new object

// Function to compare objects by content
function isEqual(objA, objB) {
    if (objA === objB) return true;
    if (typeof objA !== "object" || typeof objB !== "object" || objA === null || objB === null) return false;
    
    let keysA = Object.keys(objA);
    let keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    
    for (let key of keysA) {
        if (!keysB.includes(key) || !isEqual(objA[key], objB[key])) return false;
    }
    return true;
}

console.log(isEqual(person1, person3)); // false (since person1 was modified)

