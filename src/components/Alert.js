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
        onClick={handleAlert}
        size={props.size}
        {...rest}
      >
        {props.label}
      </Button>
    </>
  );
});

export default Alert;
