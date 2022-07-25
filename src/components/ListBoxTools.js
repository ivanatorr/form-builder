//This file contains all props for draggble element ListBox that dragging on dropable place

import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";

const ListBoxTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const listBoxProps = {
      label1: "Item1",
      label2: "Item2",
     
    };
    const listBox = item({
      type: "ListBox",
      props: listBoxProps,
    });
    const data = branch(listBox);
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
          <i class="fa fa-align-justify">
            <span className="iconsText">ListBox</span>
          </i>
        </div>
      </DnDBuilder>
    </div>
  );
};

export default ListBoxTools;
