//This file is HTML form with props for ComboBox element

import React from "react";
import { Dropdown, ButtonGroup, DropdownButton } from "react-bootstrap";

const ComboBox = React.forwardRef(({ ...props }, ref) => {
  return (
    <>
      <div className="mb-3 mt-3">
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            variant="secondary"
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size={props.size}
            title={props.label}
            ref={ref}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          </DropdownType>
        ))}
      </div>
    </>
  );
});

export default ComboBox;
