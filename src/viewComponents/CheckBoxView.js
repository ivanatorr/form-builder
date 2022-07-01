import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import CheckBox from "../components/CheckBox.js";

export const CheckBoxView = ({ id }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      draggable={true}
    >
      <CheckBox />
    </DnDBuilder>
  );
};
