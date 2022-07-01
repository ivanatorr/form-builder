import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import Alert from "../components/Alert.js";

export const AlertView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      draggable={true}
    >
      <Alert {...props} />
    </DnDBuilder>
  );
};
