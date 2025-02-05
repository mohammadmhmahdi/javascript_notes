// Function to calculate the average
function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return (total / marks.length).toFixed(2); // Rounds to 2 decimal places
}

// Taking sample input
const input = "75.25, 65, 80, 35.45, 99.50"; // Example input as a string
const marks = input.split(",").map(Number); // Convert string to an array of numbers

// Calculate and print the average
console.log(calculateAverage(marks)); // Output: 71.04