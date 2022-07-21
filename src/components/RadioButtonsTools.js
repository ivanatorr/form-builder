//This file contains all props for draggble element RadioButtons that dragging on dropable place

import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";

const RadioButtonsTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const radioButtonsProps = {
      size: "",
      label1: "Button 1",
      label2: "Button 2",
      label3: "Button 3",
    };
    const radioButtons = item({
      type: "RadioButtons",
      props: radioButtonsProps,
    });
    const data = branch(radioButtons);
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
        <i class="fas fa-ellipsis-h"> RadioButtons</i>
      </DnDBuilder>
    </div>
  );
};

export default RadioButtonsTools;
