import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";

// Define interface for Employee object
interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  department: string;
}

// Define functional component
const EmployeeDetails: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");

  // Form submission to add new employee
  const handleAddEmployee = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newEmployee: Employee = { firstName, lastName, email, phoneNumber, department, };

    setEmployees([...employees, newEmployee]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setDepartment("");
  };

  // Handle changes of the department input
  const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => { setDepartment(event.target.value);};

  // Get unique departments from employee
  const departments = Array.from(new Set(employees.map((employee) => employee.department)));

  // Rendering form and table
  return (
    <div>
      <Form onSubmit={handleAddEmployee}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" placeholder="Enter department" value={department} onChange={handleDepartmentChange} list="departmentList" />
          <datalist id="departmentList">
            {departments.map((department) => (
              <option key={department} value={department} />
            ))}
          </datalist>
        </Form.Group>

        <div className="button">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </div>
      </Form>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeeDetails


