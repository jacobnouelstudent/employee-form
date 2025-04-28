import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (savedEmployees) {
      setEmployees(savedEmployees);
    }
  }, []);

  const addEmployee = (employee) => {
    const newEmployee = {
      ...employee,
      EmployeeId: employees.length + 1
    };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <Router>
      <div className="App" style={{ width: '350px', margin: 'auto', padding: '20px' }}>
        <EmployeeForm addEmployee={addEmployee} />
        
        {/* Clear All Employees Button */}
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to clear all employees?")) {
              setEmployees([]);
              localStorage.removeItem('employees');
            }
          }}
          style={{
            marginTop: '10px',
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Clear All Employees
        </button>

        <Routes>
          <Route path="/" element={<EmployeeList employees={employees} />} />
          <Route path="/employees/:id" element={<EmployeeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
