import { Button } from "bootstrap";
import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const RadioButtons = () => {
  return (
    <ToggleButtonGroup
      type="RadioButtons"
      defaultValue={[1, 2, 3]}
      className="mb-2"
    >
      <ToggleButton value={1}>foo</ToggleButton>
      <ToggleButton value={2}>bar</ToggleButton>
      <ToggleButton value={3}>baz</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default RadioButtons;
