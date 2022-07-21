//This file is HTML form with props for Checkbox element

import React from "react";
import { Form } from "react-bootstrap";

const CheckBox = React.forwardRef(({ ...props }, ref) => {
  return (
    <>
      <Form className="mb-3 mt-3">
        <Form.Check
          type="switch"
          id="custom-switch"
          label={props.label}
          ref={ref}
        />
      </Form>
    </>
  );
});

export default CheckBox;
