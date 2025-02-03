const sumArray = (arr, index = 0, sum = 0) => {
    if (index >= arr.length) return sum; // Base case: Stop when index reaches array length
    return sumArray(arr, index + 1, sum + arr[index]); // Recursive case: Add current element
};