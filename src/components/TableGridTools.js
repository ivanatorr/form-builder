//This file contains all props for draggble element TableGrid
//that dragging on dropable place
//set all dependencies for two colomns
//of table layout

import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";

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
        <div className="icons">
          <i class="fas fa-columns">
            <span className="iconsText">TableGrid</span>
          </i>
        </div>
      </DnDBuilder>
    </div>
  );
};

export default TableGridTools;
