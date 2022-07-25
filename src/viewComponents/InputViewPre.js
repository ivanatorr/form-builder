//This file cotains what user will be see
//when drop element input in dropable section
//and have madal window for editing styles

import React from "react";
import { useEditor, DnDBuilderHOC } from "build-ui";
import Input from "../components/Input.js";

const BuilderInput = DnDBuilderHOC(Input);
//renders input element
export const InputViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });

  return (
    <>
      <BuilderInput
      
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
        draggable={true}
        {...props}
      ></BuilderInput>
    </>
  );
};
