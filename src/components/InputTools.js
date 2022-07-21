//This file contains all props for draggble element Input that dragging on dropable place

import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";

const InputTools = (props) => {
  const tools = useTools();
  const handleDragTool = () => {
    const inputProps = {
      type: "text",
      label: "My Input",
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
    <div className="fontStyle">
      <DnDBuilder
        onDragStart={handleDragTool}
        onDragEnd={tools.handleDragEnd}
        draggable={true}
      >
        <i class="fa fa-font"> Input</i>
      </DnDBuilder>
    </div>
  );
};

export default InputTools;
