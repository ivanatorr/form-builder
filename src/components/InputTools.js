import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const InputTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const inputProps = {
      text: "Greet me",
    };
    const input = item({
      type: "Input",
      props: inputProps,
    });
    const data = branch(input);
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
      <Button>Input</Button>
    </DnDBuilder>
  );
};

export default InputTools;
