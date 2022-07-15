import React from "react";
import { Button } from "react-bootstrap";

const Alert = ({ message, text, ...rest }) => {
  const handleAlert = () => {
    alert(message);
  };
  return (
    <>
      <Button variant="secondary" onClick={handleAlert} {...rest}>
        {text}
      </Button>
    </>
  );
};

export default Alert;
