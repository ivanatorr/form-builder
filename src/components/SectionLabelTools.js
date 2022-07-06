import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const SectionLabelTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const sectionLabel = item({
      type: "SectionLabel",
    });
    const data = branch(sectionLabel);
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
      <Button>SectionLabel</Button>
    </DnDBuilder>
  );
};

export default SectionLabelTools;
