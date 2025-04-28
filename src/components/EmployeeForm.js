import React, { useState } from 'react';
import './EmployeeForm.css'; // Linking the CSS

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation to ensure no blank fields
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("All fields are required!");
      return;
    }
    addEmployee({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter employee name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter employee email"
          required
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter employee phone"
          required
        />
      </div>
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default EmployeeForm;
