// Define the calculate function
function calculate(num1, num2) {
    // Define the operation function
    function operation(num1, num2, callback) {
      // Call the callback function with num1 and num2
      return callback(num1, num2);
    }
  
    // Define addition callback function
    function add(a, b) {
      return a + b;
    }
  
    // Define multiplication callback function
    function multiply(a, b) {
      return a * b;
    }
  
    // Call operation function with addition callback
    let additionResult = operation(num1, num2, add);
    console.log(`Addition: ${num1} + ${num2} = ${additionResult}`);
  
    // Call operation function with multiplication callback
    let multiplicationResult = operation(num1, num2, multiply);
    console.log(`Multiplication: ${num1} * ${num2} = ${multiplicationResult}`);
  }
  
  // Test the calculate function
  calculate(5, 3);
  calculate(10, 2);