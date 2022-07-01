import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import ComboBox from "../components/ComboBox.js";

export const ComboBoxView = ({ id }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      draggable={true}
    >
      <ComboBox />
    </DnDBuilder>
  );
};
