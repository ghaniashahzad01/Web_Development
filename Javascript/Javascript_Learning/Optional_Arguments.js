const sumArray = (arr, index = 0, sum = 0) => {
    if (index >= arr.length) return sum; // Base case: Stop when index reaches array length
    return sumArray(arr, index + 1, sum + arr[index]); // Recursive case: Add current element
};

// Example usage
console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15 (1+2+3+4+5)
console.log(sumArray([10, 20, 30]));     // Output: 60 (10+20+30)
console.log(sumArray([]));               // Output: 0 (Empty array)