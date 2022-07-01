import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const AlterTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const alertProps = {
      message: "How is it going, folk?",
      text: "Greet me",
    };
    const alert = item({
      type: "Alert",
      props: alertProps,
    });
    const data = branch(alert);
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
      <Button>Alert</Button>
    </DnDBuilder>
  );
};

export default AlterTools;
