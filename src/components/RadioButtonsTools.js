import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const RadioButtonsTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const radioButtons = item({
      type: "RadioButtons",
    });
    const data = branch(radioButtons);
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
      <Button> RadioButtons</Button>
    </DnDBuilder>
  );
};

export default RadioButtonsTools;
