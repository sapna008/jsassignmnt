
function generateGreeting(name, language = 'English') {
    const greetings = {
      English: 'Hello,',
      Spanish: 'Hola,',
      French: 'Bonjour,',
    };
  
    return `${greetings[language]}, ${name}!`;
  }
  
  console.log(generateGreeting("Alice")); 

  
  console.log(generateGreeting("Bob", "Spanish")); 

  
  console.log(generateGreeting("Charlie", "French")); 
