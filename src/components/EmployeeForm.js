import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [employees, setEmployees] = useState([]);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setEmployees([...employees, formData]);
      setFormData({ name: '', email: '', phone: '' });
    }
  };

  return (
    <div className="employee-form-container">
      <form className="employee-form" onSubmit={handleSubmit}>
        <h2>Add New Employee</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Employee</button>
      </form>

      <div className="employee-list">
        <h3>Employee List</h3>
        {employees.length === 0 ? (
          <p>No employees added yet.</p>
        ) : (
          <ul>
            {employees.map((emp, index) => (
              <li key={index}>
                {emp.name} | {emp.email} | {emp.phone}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default EmployeeForm;
