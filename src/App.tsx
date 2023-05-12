import React from "react";
import { Container } from "react-bootstrap";
import EmployeeDetails from "./component/EmployeeDetails";
import './component/Form.css'
import { text } from "stream/consumers";
import { alignPropType } from "react-bootstrap/esm/types";

const App: React.FC = () => {
  return (
    <Container>
      <div><h1>Employee Management</h1></div>
      <div>
      <EmployeeDetails></EmployeeDetails>
      </div>
      
    </Container>
  );
};

export default App;