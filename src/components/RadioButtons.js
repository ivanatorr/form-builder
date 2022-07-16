import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const RadioButtons = () => {
  return (
    <ToggleButtonGroup
      type="RadioButtons"
      defaultValue={[1, 2, 3]}
      className="mb-3 mt-3"
    >
      <ToggleButton variant="secondary" value={1}>
        foo
      </ToggleButton>
      <ToggleButton variant="secondary" value={2}>
        bar
      </ToggleButton>
      <ToggleButton variant="secondary" value={3}>
        baz
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default RadioButtons;
