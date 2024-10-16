function employeeInformation(employees) {
    const secondEmployee = employees[1];
    const { name: secondEmployeeName, department: secondEmployeeDepartment } = secondEmployee;
    
    return {
      secondEmployeeName,
      secondEmployeeDepartment,
    };
  }
  
  const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
  console.log(employeeInformation(employees));
  
  
//   Average Salary
  
  
  function averageSalary(employees) {
    let totalSalary = 0;
    
    for (const { salary } of employees) {
      totalSalary += salary;
    }
    
    return totalSalary / employees.length;
  }
  

  
  console.log(averageSalary(employees));
  
  
//   Third Employee Info
  
  
  function thirdEmployeeInfo(employees) {
    const thirdEmployee = employees[2];
    const { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary } = thirdEmployee;
    const bonus = (thirdEmployeeSalary * 10) / 100;
    
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
  }
  

  console.log(thirdEmployeeInfo(employees));
  
  