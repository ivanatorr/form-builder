import React from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const RadioButtons = React.forwardRef(({ ...props }, ref) => {
  return (
    <ToggleButtonGroup
      type="RadioButtons"
      defaultValue={[1, 2, 3]}
      className="mb-3 mt-3"
      size={props.size}
      ref={ref}
    >
      <ToggleButton variant="secondary" value={1}>
        {props.label1}
      </ToggleButton>
      <ToggleButton variant="secondary" value={2}>
        {props.label2}
      </ToggleButton>
      <ToggleButton variant="secondary" value={3}>
        {props.label3}
      </ToggleButton>
    </ToggleButtonGroup>
  );
});

export default RadioButtons;
