import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Input = React.forwardRef(({ ...props }, ref) => {
  return (
    <>
      <InputGroup className="mb-3 mt-3" ref={ref}>
        <InputGroup.Text id="inputGroup-sizing-default">
          {props.label}
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          type={props.type}
        />
      </InputGroup>
    </>
  );
});

export default Input;
