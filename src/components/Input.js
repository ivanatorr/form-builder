import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Input = () => {
  return (
    <>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text id="inputGroup-sizing-default">Input</InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </>
  );
};

export default Input;
