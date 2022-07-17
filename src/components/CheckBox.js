import React from "react";
import { Form } from "react-bootstrap";

const CheckBox = (props) => {
  return (
    <>
      <Form className="mb-3 mt-3">
        <Form.Check
          type="switch"
          id="custom-switch"
          label={props.label}
        />
      </Form>
    </>
  );
};

export default CheckBox;
