// Question 1: codingScoreCheck
function codingScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const average = marks.reduce((a, b) => a + b, 0) / marks.length;
        average >= cutoff ? resolve(average) : reject("Sorry you haven't cleared the coding round.");
      }, 2000);
    });
  }
  
  // Question 2: HUKUMUScoreCheck
  function HUKUMUScoreCheck(marks, cutoff) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const average = marks.reduce((a, b) => a + b, 0) / marks.length;
        average >= cutoff ? resolve(average) : reject("Sorry you haven't cleared the HUKUMU round.");
      }, 2000);
    });
  }
  
  // Question 3: unitMovementCheck
  function unitMovementCheck(avgCodingScore, avgHukumuScore, cutoff) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const average = (avgCodingScore + avgHukumuScore) / 2;
        average >= cutoff ? resolve(average) : reject("Sorry you haven't cleared the final cutoff.");
      }, 2000);
    });
  }
  
  

  
  
  // Coding Score Check
  codingScoreCheck([80, 90, 70], 80)
    .then((avg) => console.log(`Coding average: ${avg}`))
    .catch((err) => console.error(err));
  
  // HUKUMU Score Check
  HUKUMUScoreCheck([85, 95, 75], 85)
    .then((avg) => console.log(`HUKUMU average: ${avg}`))
    .catch((err) => console.error(err));
  
  // Unit Movement Check
  unitMovementCheck(80, 85, 82)
    .then((avg) => console.log(`Final average: ${avg}`))
    .catch((err) => console.error(err));