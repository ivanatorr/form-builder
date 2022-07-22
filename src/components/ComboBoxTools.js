//This file contains all props for draggble element CombBox that dragging on dropable place

import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";

const ComboBoxTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const comboBoxProps = {
      label: "Combobox",
      size: "",
    };
    const comboBox = item({
      type: "ComboBox",
      props: comboBoxProps,
    });
    const data = branch(comboBox);
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
          <i class="fas fa-caret-square-down">
            <span className="iconsText">ComboBox</span>
          </i>
        </div>
      </DnDBuilder>
    </div>
  );
};

export default ComboBoxTools;
