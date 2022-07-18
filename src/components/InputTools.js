import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const InputTools = (props) => {
  const tools = useTools();
  const handleDragTool = () => {
    const input = item({
      type: "Input",
      label: props.label,
    });
    const data = branch(input);
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
        Input
      </DnDBuilder>
    </div>
  );
};

export default InputTools;
