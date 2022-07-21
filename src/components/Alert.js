//This file is HTML form with props for Alert element

import React from "react";
import { Button } from "react-bootstrap";

const Alert = React.forwardRef(({ ...props }, ref, ...rest) => {
  const handleAlert = () => {
    alert(props.message);
  };
  return (
    <>
      <Button
        variant="secondary"
        onDoubleClick={handleAlert}
        size={props.size}
        {...rest}
      >
        {props.label}
      </Button>
    </>
  );
});

export default Alert;
