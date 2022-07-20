import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const TableGridTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const tableGrid = item({
      type: "TableGrid",
    });
    const tableRow = item({
      type: "TableRow",
    });
    const tableDataOne = item({
      type: "TableData",
    });
    const tableDataTwo = item({
      type: "TableData",
    });
    const tableDataOneBranch = branch(tableDataOne);
    const tableDataTwoBranch = branch(tableDataTwo);
    const tableRowBranch = branch(tableRow)
      .with_child(tableDataOneBranch)
      .with_child(tableDataTwoBranch);
    const data = branch(tableGrid).with_child(tableRowBranch);
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
        <i class="fas fa-columns"> TableGrid</i>
      </DnDBuilder>
    </div>
  );
};

export default TableGridTools;
