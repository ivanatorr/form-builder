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
        RadioButtons
      </DnDBuilder>
    </div>
  );
};

export default RadioButtonsTools;
