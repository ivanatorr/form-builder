import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import RadioButtons from "../components/RadioButtons.js";

export const RadioButtonsView = ({ id }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      draggable={true}
    >
      <RadioButtons />
    </DnDBuilder>
  );
};
