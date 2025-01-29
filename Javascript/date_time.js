// Get the current date and time
const now = new Date();

// Format the date as DD-MM-YYYY
const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0'); 
const year = now.getFullYear();
const formattedDate = `${day}-${month}-${year}`;

// Format the time as HH:MM:SS
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const formattedTime = `${hours}:${minutes}:${seconds}`;


console.log(`Current Date: ${formattedDate}`);
console.log(`Current Time: ${formattedTime}`);
