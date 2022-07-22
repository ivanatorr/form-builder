//This file cotains what user will be see
//when drop element Alert in dropable section
//and have madal window for editing styles

import React from "react";
import { DnDBuilderHOC, useEditor } from "build-ui";

import Alert from "../components/Alert.js";

const AlertBuilder = DnDBuilderHOC(Alert);
//renders alert element
export const AlertViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });

  return (
    <>
      <AlertBuilder
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
        draggable={true}
        {...props}
      ></AlertBuilder>
    </>
  );
};
