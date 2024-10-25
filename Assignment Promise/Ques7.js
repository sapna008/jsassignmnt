// Array Setup
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function Setup
function filterArray(arr, callback) {
  let filteredArray = [];

  // Callback Function Definition
  function isEven(element) {
    // Callback Function Implementation
    return element % 2 === 0;
  }

  // Array Filtering
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}

// Using the callback function directly
let filteredNumbers = filterArray(numbers, function(element) {
  return element % 2 === 0;
});

// Display Results
console.log("Original Array:", numbers);
console.log("Filtered Array:", filteredNumbers);
