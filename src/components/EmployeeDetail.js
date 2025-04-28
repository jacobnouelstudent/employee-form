import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeeDetail() {
  const { id } = useParams();

  // Load employees from local storage
  const savedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
  const employee = savedEmployees.find((emp) => emp.EmployeeId === parseInt(id));

  if (!employee) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Employee not found.</div>;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Employee Details</h2>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
    </div>
  );
}

export default EmployeeDetail;
