//main section for droping elements preview mode

import React from "react";
import { useEditor, DnDBuilderHOC } from "build-ui";
import { Section } from "../components/Section";
import "../App.css";

const BuilderSection = DnDBuilderHOC(Section);
//function for render main dropable section
export const SectionViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });
  return (
    <>
      <div className="sectionPos">
        <BuilderSection
          className="sectionPre"
          onDrop={editor.handleDrop}
          {...props}
        ></BuilderSection>
      </div>
    </>
  );
};
