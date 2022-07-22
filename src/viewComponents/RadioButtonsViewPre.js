//This file cotains what user will be see
//when drop element radioButtons in dropable section
//and have madal window for editing styles

import React, { useState } from "react";
import { DnDBuilderHOC, useEditor, useActions } from "build-ui";
import { Button, Modal, Form, ButtonGroup } from "react-bootstrap";
import RadioButtons from "../components/RadioButtons.js";

const RadioButtonsBuilder = DnDBuilderHOC(RadioButtons);
//function for renders radioButtons
export const RadioButtonsViewPre = ({ id, ...props }) => {
  const editor = useEditor({
    id: id,
  });

  return (
    <>
      <RadioButtonsBuilder
        onDragStart={editor.handleDragStart}
        onDragEnd={editor.handleDragEnd}
        draggable={true}
        {...props}
      ></RadioButtonsBuilder>
    </>
  );
};
