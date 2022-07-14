import React from "react";
import { Form } from "react-bootstrap";

const CheckBox = () => {
  return (
    <>
      <Form className="mb-3 mt-3">
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
      </Form>
    </>
  );
};

export default CheckBox;
