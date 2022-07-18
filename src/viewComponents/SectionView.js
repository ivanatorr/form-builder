import React from "react";
import { useEditor, DnDBuilderHOC } from "build-ui";
import { Section } from "../components/Section";

const BuilderSection = DnDBuilderHOC(Section);
export const SectionView = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  console.log(id);
  return (
    <>
      <div className="usePos">
        <BuilderSection onDrop={editor.handleDrop} {...props}></BuilderSection>
      </div>
    </>
  );
};
