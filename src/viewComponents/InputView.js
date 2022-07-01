import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import Input from "../components/Input.js";

export const InputView = ({ id }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      draggable={true}
    >
      <Input />
    </DnDBuilder>
  );
};
