function max(...numbers) {  
  let result = -Infinity;  
  for (let number of numbers) {  
    if (number > result) result = number;  
  }  
  return result;  
}  
console.log(max(4, 1, 9, -2)); // Output: 9  

let nums = [5, 1, 7];  
console.log(max(...nums)); // Output: 7  


let words = ["never", "fully"];  
console.log(["will", ...words, "understand"]); // Output: ["will", "never", "fully", "understand"]  

let coordinates = { x: 10, y: 0 };  
console.log({ ...coordinates, y: 5, z: 1 }); // Output: { x: 10, y: 5, z: 1 }  
