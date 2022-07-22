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
        <div className="icons">
          <i class="fa fa-font">
            <span className="iconsText">Input</span>
          </i>
        </div>
      </DnDBuilder>
    </div>
  );
};

export default InputTools;
