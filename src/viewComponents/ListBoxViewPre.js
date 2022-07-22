//This file cotains what user will be see
//when drop element listBox in dropable section
//and have modal window for editing styles

import React from "react";
import { DnDBuilderHOC, useEditor } from "build-ui";
import ListBox from "../components/ListBox.js";

const ListBoxBuilder = DnDBuilderHOC(ListBox);
//renders listBox element
export const ListBoxViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });

  return (
    <>
      <ListBoxBuilder
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
        draggable={true}
        {...props}
      ></ListBoxBuilder>
    </>
  );
};
