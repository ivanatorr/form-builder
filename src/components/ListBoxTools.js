import React from "react";
import { DnDBuilder, useTools, item, branch } from "build-ui";
import { Button } from "react-bootstrap";

const ListBoxTools = () => {
  const tools = useTools();
  const handleDragTool = () => {
    const listBoxProps = {
      label1: "Item1",
      label2: "Item2",
      label3: "Item3",
      label4: "Item4",
      width: "",
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
        ListBox
      </DnDBuilder>
    </div>
  );
};

export default ListBoxTools;
