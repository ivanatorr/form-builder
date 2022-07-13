import React from "react";
import { DnDBuilderHOC, useEditor } from "build-ui";
import { SectionLabel } from "../components/SectionLabel";

const BuilderSectionLabel = DnDBuilderHOC(SectionLabel);

export const SectionLabelView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <BuilderSectionLabel
        {...props} 
        onDrop={editor.handleDrop}
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
    />
  );
};
