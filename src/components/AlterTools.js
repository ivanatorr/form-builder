//This file contains all props for draggble element Alert that dragging on dropable place

import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import "../App.css";

const AlterTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const alertProps = {
      message: "How is it going, folk?",
      label: "Greet me",
      size: "",
    };
    const alert = item({
      type: "Alert",
      props: alertProps,
    });
    const data = branch(alert);
    tools.triggerDragStart({
      data: data,
    });
  };

  return (
    <>
      <div className="fontStyle">
        <DnDBuilder
          onDragStart={handleDragTool}
          onDragEnd={tools.handleDragEnd}
          draggable={true}
        >
          <div className="icons">
            <i class="fas fa-bell">
              <span className="iconsText">Alert</span>
            </i>
          </div>
        </DnDBuilder>
      </div>
    </>
  );
};

export default AlterTools;
