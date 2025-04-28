import React, { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  // Load employees from local storage when the app starts
  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees"));
    if (savedEmployees) {
      setEmployees(savedEmployees);
    }
  }, []);

  // Function to add a new employee
  const addEmployee = () => {
    const name = prompt("Enter employee name:");
    if (name) {
      const updatedEmployees = [...employees, { name }];
      setEmployees(updatedEmployees);
      saveData(updatedEmployees);
    }
  };

  // Function to save employees to local storage
  const saveData = (employeesToSave) => {
    localStorage.setItem("employees", JSON.stringify(employeesToSave));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee List</h1>
      <button onClick={addEmployee}>Add Employee</button>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
