import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const ComboBoxTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const comboBox = item({
      type: "ComboBox",
    });
    const data = branch(comboBox);
    tools.triggerDragStart({
      data: data,
    });
  };
  return (
    <DnDBuilder
      onDragStart={handleDragTool}
      onDragEnd={tools.handleDragEnd}
      draggable={true}
    >
      <Button>ComboBox</Button>
    </DnDBuilder>
  );
};

export default ComboBoxTools;
