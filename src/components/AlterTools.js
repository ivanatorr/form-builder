import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";
import App from "../App";
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
    <div className="fontStyle">
      <DnDBuilder
        onDragStart={handleDragTool}
        onDragEnd={tools.handleDragEnd}
        draggable={true}
      >
        Alert
      </DnDBuilder>
    </div>
  );
};

export default AlterTools;
