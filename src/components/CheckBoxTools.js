import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";

const CheckBoxTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const checkboxProps = {
      label: "CheckBox",
    };
    const checkbox = item({
      type: "CheckBox",
      props: checkboxProps,
    });
    const data = branch(checkbox);
    tools.triggerDragStart({
      data: data,
    });
  };
  return (
    <div className="fontStyle">
      <DnDBuilder
        onDragStart={handleDragTool}
        onDragEnd={tools.handleDragEnd}
        draggable={true}
      >
        <i class="fas fa-check-circle"> CheckBox</i>
      </DnDBuilder>
    </div>
  );
};

export default CheckBoxTools;
