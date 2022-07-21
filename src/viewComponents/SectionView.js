//main section for droping elements preview mode

import React from "react";
import { DnDBuilderHOC } from "build-ui";
import { Section } from "../components/Section";
import useDemoEditor from "../hooks/useDemoEditor";
import "../App.css";

const BuilderSection = DnDBuilderHOC(Section);
//function for renders main section
export const SectionView = ({ id, ...props }) => {
  const editor = useDemoEditor({
    id: id,
  });

  return (
    <>
      <div className="sectionPos">
        <div className="text-center">
          Drop zone <i class="far fa-hand-point-down"></i>
        </div>

        <BuilderSection
          onDrop={editor.handleDrop}
          onDragEnter={editor.handlePaintDropZone}
          onDragLeave={editor.handleEraseDropZone}
          {...props}
        ></BuilderSection>
      </div>
    </>
  );
};
