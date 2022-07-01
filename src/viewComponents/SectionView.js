import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import { Section } from "../components/Section";

export const SectionView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <div className="use">
      <DnDBuilder onDrop={editor.handleDrop}>
        <Section {...props} />
      </DnDBuilder>
    </div>
  );
};
