import React from "react";
import { DnDBuilder, useEditor } from "build-ui";
import { Section } from "../components/Section";

export const SectionView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  console.log(id);
  return (
    <>
      <div className="usePos">
        <DnDBuilder onDrop={editor.handleDrop}>
          <Section {...props}></Section>
        </DnDBuilder>
      </div>
      {/* <div className="use">
        <DnDBuilder onDrop={editorLabel.handleDrop}>
          <SectionLabel {...props}></SectionLabel>
        </DnDBuilder>
      </div> */}
    </>
  );
};
