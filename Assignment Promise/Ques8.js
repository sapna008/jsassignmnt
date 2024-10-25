// Function Setup: getUserData
function getUserData(id, callback) {
    // Asynchronous Simulation: Simulate API request with setTimeout
    setTimeout(() => {
      // Dummy user object
      const user = {
        id: id,
        name: `User ${id}`,
        email: `user${id}@example.com`,
      };
  
      // Delayed Callback: Call callback with user object
      callback(user);
    }, 2000); // 2-second delay
  }
  
  // Display Function Setup: displayUser
  function displayUser(user) {
    // Display user details
    console.log(`User ID: ${(link unavailable)}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
  }
  
  // Callback Function Invocation
  getUserData(123, displayUser);
  