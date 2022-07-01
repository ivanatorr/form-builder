import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import ListBox from "../components/ListBox.js";

export const ListBoxView = ({ id }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <DnDBuilder
      onDragStart={editor.handleDragStart}
      onDragEnd={editor.handleDragEnd}
      draggable={true}
    >
      <ListBox />
    </DnDBuilder>
  );
};
