//This file cotains what user will be see
//when drop element SectionLabel in dropable section
//and have madal window for editing styles
//and have some dropable props
//for take draggble elements

import React from "react";
import { DnDBuilderHOC, useEditor } from "build-ui";
import { SectionLabel } from "../components/SectionLabel";

const BuilderSectionLabel = DnDBuilderHOC(SectionLabel);
//function for renders sectionLabel
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
