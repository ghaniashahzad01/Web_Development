// Get the current date and time
const now = new Date();

// Format the date as DD-MM-YYYY
const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const year = now.getFullYear();
const formattedDate = `${day}-${month}-${year}`;