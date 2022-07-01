import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const ListBoxTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const listBox = item({
      type: "ListBox",
    });
    const data = branch(listBox);
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
      <Button>ListBox</Button>
    </DnDBuilder>
  );
};

export default ListBoxTools;
