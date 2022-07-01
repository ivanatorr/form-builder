import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import { Section } from "../components/Section";

export const SectionView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <DnDBuilder onDrop={editor.handleDrop}>
      <Section {...props} />
    </DnDBuilder>
  );
};
