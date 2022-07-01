import React from "react";
import { Button } from "react-bootstrap";

const Alert = ({ message, text, ...rest }) => {
  const handleAlert = () => {
    alert(message);
  };
  return (
    <>
      <Button variant="primary" onClick={handleAlert} {...rest}>
        {text}
      </Button>
    </>
  );
};

export default Alert;
