//This file cotains what user will be see
//when drop element ComboBox in dropable section
//and have madal window for editing styles

import React from "react";
import { DnDBuilderHOC, useEditor } from "build-ui";

import ComboBox from "../components/ComboBox.js";

const ComboBoxBuilder = DnDBuilderHOC(ComboBox);
//renders comboBox element
export const ComboBoxViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });

  return (
    <>
      <ComboBoxBuilder
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
        draggable={true}
        {...props}
      ></ComboBoxBuilder>
    </>
  );
};
