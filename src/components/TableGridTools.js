import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const TableGridTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const tableGrid = item({
      type: "TableGrid",
    });
    const data = branch(tableGrid);
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
      <Button>TableGrid</Button>
    </DnDBuilder>
  );
};

export default TableGridTools;
